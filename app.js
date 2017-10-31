
function generate(text, name) {
  let fragments = text.split(' ')
  fragments = fragments.filter((fragment) => fragment.trim() !== '')
  let container = document.createElement('div')
  let i = 0
  for (let fragment of fragments) {
    let input = document.createElement('option')
    i++
    input.setAttribute('name', `${name}-${i}`)
    input.setAttribute('value', '')
    input.innerHTML = fragment
    container.appendChild(input)
  }
  return container.innerHTML
}

window.go.addEventListener('click', () => {
  window.output.value = generate(window.customText.value, window.customName.value)
})


