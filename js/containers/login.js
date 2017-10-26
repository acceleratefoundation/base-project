import Card from '../components/card'
import NavBar from '../components/nav-bar'
import Search from '../components/search'
import Button from '../components/button'

export default class Login{

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

    
      
    return(container)
    
  }
}
