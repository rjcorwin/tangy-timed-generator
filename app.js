
function generate(text, name, numberOfColumns) {

  let fragments = text.split(' ')
  fragments = fragments.filter((fragment) => fragment.trim() !== '')

  let numberOfRows = Math.ceil(fragments.length / numberOfColumns) 

  let table = document.createElement('div')
  
  for (var i=0; i < numberOfRows; i++) {
    let row = document.createElement('div')
    row.className = 'row'
    for (var x=0; x < numberOfColumns; x++) {
      let column = document.createElement('div')
      column.className = 'column'
      row.appendChild(column)
    }
    table.appendChild(row)
  }

   i = 0
  let tr = document.createElement('tr')

  rowPos = 0
  columnPos = 0
  for (let fragment of fragments) {
    i++
    let tr = table.childNodes[rowPos]
    let td = tr.childNodes[columnPos]
    let input = document.createElement('tangy-toggle-button')
    input.setAttribute('name', `${name}-${i}`)
    input.setAttribute('value', '')
    input.innerHTML = fragment
    td.appendChild(input)
    columnPos++
    if (columnPos + 1 > numberOfColumns) {
      columnPos = 0
      rowPos++
    }
  }
  window.demo.innerHTML = ''
  window.demo.appendChild(table)
  let container = document.createElement('div')
  container.appendChild(table.cloneNode(true))
  return container.innerHTML
}

window.go.addEventListener('click', () => {
  window.output.value = generate(
    window.customText.value, 
    window.customName.value, 
    parseInt(window.numberOfColumns.value)
  )
})
window.output.value = generate(
  window.customText.value, 
  window.customName.value, 
  parseInt(window.numberOfColumns.value)
)



