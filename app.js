
function generate(text, name, numberOfColumns) {

  let fragments = text.split(' ')
  fragments = fragments.filter((fragment) => fragment.trim() !== '')

  let numberOfRows = Math.ceil(fragments.length / numberOfColumns) 

  let table = document.createElement('table')
  
  for (var i=0; i < numberOfRows; i++) {
		table.appendChild(document.createElement('tr'))
	}
	table.childNodes.forEach((row) => {
		for (i=0; i < numberOfColumns; i++) {
      row.appendChild(document.createElement('td'))
		}
	})

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

//window.go.addEventListener('click', () => {
  window.output.value = generate(
		window.customText.value, 
		window.customName.value, 
		parseInt(window.numberOfColumns.value)
	)
//})



