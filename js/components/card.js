export default class Card {
  constructor (options) {
    this.options = options
  } 

  getContent() {
    let container = document.createElement('div')

    let card = document.createElement('div')
    card.id = this.options.id
    card.src = '../images/amazon-echo.png' 
    card.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)'
    card.style.transition = '0.3s'
    card.style.width = '100px'
    card.style.height = '100px'
    card.style.border = '1px solid #000'
    card.style.position = 'absolute'
    card.style.top = '100px'
    card.style.marginTop = this.options.marginTop
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
