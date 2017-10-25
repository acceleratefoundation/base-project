import Card from '../components/card'
import NavBar from '../components/nav-bar'
import Search from '../components/search'
import Button from '../components/button'

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

    
    let navBar = new NavBar({
      id: 'NavBar',
      columnClass: 'col-12'
    })
    container.append(navBar.getContent())
 
    let honeywellCard = new Card({
      id: 'HoneywellCard',
      title: 'Honeywell',
      value: 'Honeywell',
      columnClass: 'col-2'
    })
    
    container.append(honeywellCard.getContent())

    let ecobeeCard = new Card({
      id: 'EcobeeCard',
      title: 'Ecobee',
      value: 'Ecobee',
      columnClass: 'col-2'
    })

    container.append(ecobeeCard.getContent())
    
    let nestCard = new Card({
      id: 'NestCard',
      title: 'Nest',
      value: 'Nest',
      columnClass: 'col-2'
    })

    container.append(nestCard.getContent())

    let alexaCard = new Card({
      id: 'AlexaCard',
      title: 'Alexa',
      value: 'Alexa',
      columnClass: 'col-2'
    })

    container.append(alexaCard.getContent())


    let search = new Search({
      id: 'Search',
      placeholder: 'Search',
      columnClass: 'col-2'
    })

    container.append(search.getContent())

    let button = new Button({
      id: 'Button',
      title: 'Take Control',
      value: 'Take Control',
      columnClass: 'col-1'
    })

    container.append(button.getContent())
      
    return(container)
    
  }
}
