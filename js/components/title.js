export default class Title {
  constructor (options) {
    this.options = options
  } 

  getContent() {
    let container = document.createElement('div')
    container.classList.add(this.options.columnClass)

    let title = document.createElement('div')
    title.append(this.options.title)
    title.style.position = 'absolute'
    title.style.color = '#ffffff'
    title.style.fontSize = '20px'
    title.style.top = '100px'
    title.style.marginLeft = '100px'

    container.append(title)

    return(container)
  }
}

