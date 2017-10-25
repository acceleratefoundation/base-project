export default class NavBar {
  constructor (options) {
    this.options = options
  } 

  getContent() {
    let container = document.createElement('div')
    container.classList.add(this.options.columnClass)

    let navBar = document.createElement('ul')
    navBar.id = this.options.id
    navBar.style.listStyleType = 'none'
    navBar.style.margin = '0'
    navBar.style.padding = '0'
    navBar.style.overflow = 'hidden'
    navBar.style.backgroundColor = '#333'

    let home = document.createElement('li')
    home.id = 'home'
    home.value = 'home'
    home.append(document.createTextNode('Home'))
    home.style.float = 'left'
    home.style.display = 'block'
    home.style.color = 'white'
    home.style.textAlign = 'center'
    home.style.padding = '14px 16px'
    home.style.fontWeight = 'bold'
    home.style.cursor = 'pointer'
    home.onmouseover = () =>{
      home.style.textDecoration = 'underline'
    }
    home.onmouseout = () =>{
      home.style.textDecoration = 'none'
    }
    navBar.append(home)
    
    let profile = document.createElement('li')
    profile.id = 'profile'
    profile.value = 'profile'
    profile.append(document.createTextNode('Profile'))
    profile.style.float = 'left'
    profile.style.display = 'block'
    profile.style.color = 'white'
    profile.style.textAlign = 'center'
    profile.style.cursor = 'pointer'
    profile.style.padding = '14px 16px'
    profile.onmouseover = () =>{
      profile.style.textDecoration = 'underline'
    }
    profile.onmouseout = () =>{
     profile.style.textDecoration = 'none'
    }
    navBar.append(profile)

    let devices = document.createElement('li')
    devices.id = 'devices'
    devices.value = 'devices'
    devices.append(document.createTextNode('Devices'))
    devices.style.float = 'left'
    devices.style.display = 'block'
    devices.style.color = 'white'
    devices.style.textAlign = 'center'
    devices.style.padding = '14px 16px'
    devices.style.cursor = 'pointer'
    devices.onmouseover = () =>{
      devices.style.textDecoration = 'underline'
    }
    devices.onmouseout = () =>{
     devices.style.textDecoration = 'none'
    }
    navBar.append(devices)

    let settings  = document.createElement('li')
    settings.id = 'settings'
    settings.value = 'settings'
    settings.append(document.createTextNode('Settings'))
    settings.style.float = 'left'
    settings.style.display = 'block'
    settings.style.color = 'white'
    settings.style.textAlign = 'center'
    settings.style.padding = '14px 16px'
    settings.style.cursor = 'pointer'
    settings.onmouseover = () =>{
      settings.style.textDecoration = 'underline'
    }
    settings.onmouseout = () =>{
     settings.style.textDecoration = 'none'
    }
    navBar.append(settings)

    
    container.append(navBar)

    return(container)
  }
}
