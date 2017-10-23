import Title from '../components/title'
import Card from '../components/card'

export default class Home {

  getContent() {
    let container = document.createElement('div')
    container.id = 'container'
    container.style.position = 'absolute'
    container.style.width = '100%'
    container.style.height = '100%'
    container.style.backgroundImage = 'url("")'
    container.style.backgroundRepeat = 'no-repeat'
    container.style.backgroundSize = 'cover'
    container.style.backgroundPosition = '50% 50%'
    container.style.cursor = 'url("/images/DestinyCursor.png")'

    let title = new Title({
      title: 'Base Project'
    })

    container.append(title.getContent())
    
    let card = new Card({
      id: 'Card'
    })

    container.append(card.getContent())

    return(container)
    
  }
}
