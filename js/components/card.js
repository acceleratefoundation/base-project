export default class Card {
  constructor (options) {
    this.options = options
  } 

  getContent() {
    let container = document.createElement('div')
    container.classList.add(this.options.columnClass)

    let card = document.createElement('div')
    card.id = this.options.id
    card.value = this.options.value
    card.append(this.options.title)

    card.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)'
    card.style.transition = '0.3s'
    card.style.width = '100px'
    card.style.height = '100px'
    card.style.border = '1px solid #000'
    card.style.position = 'absolute'
    card.style.cursor = 'pointer'
    card.style.top = '35%'
    card.onmouseover = () => {
      card.style.boxShadow = '0 8px 16px 0 rgba(0,0,0,0.2)'
    }
    card.onmouseout = () => {
      card.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)'
    }

    container.append(card)
    
    return(container)
  }
}
