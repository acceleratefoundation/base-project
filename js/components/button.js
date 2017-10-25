export default class Button {
  constructor (options) {
    this.options = options
  } 

  getContent() {
    let container = document.createElement('div')
    container.id = this.options.id
    container.classList.add(this.options.columnClass)

    let button = document.createElement('div')
    button.style.backgroundColor = 'transparent'

    let buttonIcon = document.createElement('i')
    buttonIcon.classList.add('fa')
    buttonIcon.classList.add(this.options.icon)
    buttonIcon.classList.add('fa-2x')
    button.append(buttonIcon)

    container.append(button)

    return container
  } 
  
}
