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

    search.style.display = 'none'
    search.style.width = '50px'
    search.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)'
    search.style.borderBottom = '2px #333'
    search.style.fontSize = '14px'
    search.style.backgroundColor = 'rgba(0,0,0,0.2)'
    search.style.backgroundPosition = '10px 10px'
    search.style.padding = '12px 20px 12px 40px'
    search.style.WebkitTransition = 'width 0.1s ease-in-out'
    search.style.transition = 'width 0.1s ease-in-out'
    search.onblur = () => {
      search.style.width = '25%'
      search.style.display = 'none'
    }

    let searchIcon = document.createElement('i')
    searchIcon.classList.add('fa')
    searchIcon.classList.add('fa-search')
    searchIcon.classList.add('fa-2x')
    searchIcon.style.padding = '3px 3px'
     
    searchIcon.onclick = () => {
      search.style.width = '100%'
      search.style.display = 'block'
    }
    container.append(searchIcon)

    container.append(search)

    return(container)
  }
}
