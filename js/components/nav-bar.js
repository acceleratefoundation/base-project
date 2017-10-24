export default class NavBar {
  constructor (options) {
    this.options = options
  } 

  getContent() {
    let container = document.createElement('div')
    container.classList.add(this.options.columnClass)

    let navBar = document.createElement('ul')
    navBar.id = this.options.id
    navBar.style.width = '1500px'
    navBar.style.listStyleType = 'none'
    navBar.style.margin = '0'
    navBar.style.padding = '0'
    navBar.style.overflow = 'hidden'
    navBar.style.backgroundColor = '#333'

    let devices = document.createElement('li')
    devices.id = 'devices'
    devices.value = 'devices'
    devices.append(document.createTextNode('Devices'))
    devices.style.float = 'left'
    devices.style.display = 'block'
    devices.style.color = 'white'
    devices.style.textAlign = 'center'
    devices.style.padding = '14px 16px'
    navBar.append(devices)

    let home = document.createElement('li')
    home.id = 'home'
    home.value = 'home'
    home.append(document.createTextNode('Home'))
    home.style.float = 'left'
    home.style.display = 'block'
    home.style.color = 'white'
    home.style.textAlign = 'center'
    home.style.padding = '14px 16px'
    navBar.append(home)

    let profile = document.createElement('li')
    profile.id = 'profile'
    profile.value = 'profile'
    profile.append(document.createTextNode('Profile'))
    profile.style.float = 'left'
    profile.style.display = 'block'
    profile.style.color = 'white'
    profile.style.textAlign = 'center'
    profile.style.padding = '14px 16px'
    navBar.append(profile)

    container.append(navBar)

    return(container)
  }
}
