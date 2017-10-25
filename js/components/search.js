export default class Search {
  constructor (options) {
    this.options = options
  } 

  getContent() {
    let container = document.createElement('div')
    container.classList.add(this.options.columnClass)

    let search = document.createElement('input')
    search.type = 'text'
    search.id = this.options.id
    search.placeholder = this.options.placeholder

    search.style.width = '50px'
    search.style.boxSizing = 'border-box'
    search.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)'
    search.style.border = '2px solid #333'
    search.style.borderRadius = '4px'
    search.style.color = '#ffffff'
    search.style.fontSize = '14px'
    search.style.backgroundColor = 'transparent'
    search.style.backgroundPosition = '10px 10px'
    search.style.padding = '12px 20px 12px 40px'
    search.style.WebkitTransition = 'width 0.1s ease-in-out'
    search.style.transition = 'width 0.1s ease-in-out'
    search.onclick = () => {
      search.style.width = '100%'
    }
    search.onblur = () => {
      search.style.width = '25%'
    }

    container.append(search)

    return(container)
  }
}
