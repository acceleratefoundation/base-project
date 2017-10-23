import Title from '../components/title'

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

    let title = new Title({
      title: 'Base Project'
    })

    container.append(title.getContent())
    
    return(container)
    
  }
}
