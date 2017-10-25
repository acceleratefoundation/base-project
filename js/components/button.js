export default class Button {
  constructor (options) {
    this.options = options
  } 

  getContent() {
    let container = document.createElement('div')
    container.id = this.options.id
    container.classList.add(this.options.columnClass)

    let buttonIcon = document.createElement('i')
    buttonIcon.classList.add('fa')
    buttonIcon.classList.add('fa-globe')
    buttonIcon.classList.add('fa-2x')
    buttonIcon.style.borderRadius = '25px'
    container.append(buttonIcon)

    return container
  } 
  
}
