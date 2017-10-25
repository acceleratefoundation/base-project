import Card from '../components/card'
import NavBar from '../components/nav-bar'
import Search from '../components/search'
import Button from '../components/button'
import Table from '../components/table'

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
 
    let search = new Search({
      id: 'Search',
      placeholder: 'Search',
      columnClass: 'col-2',
    })

    container.append(search.getContent())
    
    let button = new Button({
      id: 'Button',
      title: 'Take Control',
      value: 'Take Control',
      columnClass: 'col-2',
      icon: 'fa-globe'
    })
    
    container.append(button.getContent())

    let addButtonContainer = document.createElement('div')
    addButtonContainer.id = 'addButtonContainer'
    addButtonContainer.style.position = 'absolute'
    addButtonContainer.style.top = '100px'
    addButtonContainer.style.zIndex = '5'
    addButtonContainer.style.right = '4%'

    let addButton = new Button({
      id: 'Add Button',
      columnClass: 'col-2',
      icon: 'fa-plus-circle'
    })

    addButtonContainer.append(addButton.getContent())
    container.append(addButtonContainer)
    
    let table = new Table({
      id: 'table',
      data: [
        {
          "name": "Cody",
          "address": "1234 Test Lane"
        },
        {
          "name": "Cory",
          "address": "1234 Test Lane 1"
        },
        {
          "name": "Sean",
          "address": "1234 Test Lane 2"
        },
        {
          "name": "Gerald",
          "address": "1234 Test Lane 3"
        },
      ],
      design: {
        name: {
          title: 'name',
          description: 'address'
        },
        header: {
          name: 'Name',
          widget: 'Average Temperature',
          control: 'Control'
        }
      },
      columnClass: 'col-12'
    })

    container.append(table.getContent())




      
    return(container)
    
  }
}
