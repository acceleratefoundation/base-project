export default class LoginForm {
  constructor (options) {
    this.options = options
  } 

  getContent() {
    let container = document.createElement('div')
    container.classList.add(this.options.columnClass)

    let login = document.createElement('div')
    login.style.position = 'absolute'
    login.style.border = '3px solid #f1f1f1'
    login.style.display = 'inline-block'
    container.append(login)
    
    
    let card = document.createElement('div')
    card.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)'
    card.style.borderRadius= '25px'
    card.style.transition = '0.3s'
    card.style.width = '350px'
    card.style.height = '350px'
    card.style.border = '1px solid #000'
    card.style.position = 'absolute'
    card.style.cursor = 'pointer'
    card.style.top = '33%'
    card.style.marginLeft = '39%'
    container.append(card)
    
    let cardBackground = document.createElement('img')
    cardBackground.src = '/images/login-background.jpg'
    cardBackground.style.height = '350px'
    cardBackground.style.borderRadius = '25px'
    cardBackground.style.width = '350px'
    cardBackground.style.opacity = '0.4'
    card.append(cardBackground
    
    )
    let usernameContainer = document.createElement('div')
    usernameContainer.id = 'usernameContainer'
    usernameContainer.style.position = 'fixed'
    usernameContainer.style.top = '45%'
    usernameContainer.style.marginLeft = '42%'
    usernameContainer.style.border = '1px solid rgba(255,255,255,0.6)'
    container.append(usernameContainer)
    let username = document.createElement('input')
    username.type = 'text'
    username.placeholder = 'Username' 
    username.style.width = '250px'
    username.style.height = '30px'
    username.style.background = 'transparent'
    username.style.border = '1px solid rgba(255,255,255,0.6)'
    username.style.borderRadius = '2px'
    username.style.color = '#fff'
    username.style.fontFamily = 'Exo, sans-serif'
    username.style.fontSize = '16px'
    username.style.fontWeight = '400'
    username.style.padding = '4px'
    login.append(username)
    usernameContainer.append(username)

    let passwordContainer = document.createElement('div')
    passwordContainer.id = 'passwordContainer'
    passwordContainer.style.position = 'fixed'
    passwordContainer.style.top = '50%'
    passwordContainer.style.marginLeft = '42%'
    container.append(passwordContainer)
    let password = document.createElement('input')
    password.type = 'text'
    password.placeholder = 'Password' 
    password.style.width = '250px'
    password.style.height = '30px'
    password.style.background = 'transparent'
    password.style.border = '1px solid rgba(255,255,255,0.6)'
    password.style.borderRadius = '2px'
    password.style.color = '#fff'
    password.style.fontFamily = 'Exo, sans-serif'
    password.style.fontSize = '16px'
    password.style.fontWeight = '400'
    password.style.padding = '4px'
    login.append(password)
    passwordContainer.append(password)

    let button = document.createElement('div')
    button.style.backgroundColor = 'transparent'
    button.style.position = 'fixed'
    button.style.top = '60%'
    button.style.marginLeft = '47%'
    container.append(button)
    
    let buttonIcon = document.createElement('img')
    buttonIcon.src = '/images/submit.png'
    buttonIcon.style.height = '50%'
    buttonIcon.style.width = '50%'
    buttonIcon.onclick = () =>{
    }
    button.append(buttonIcon)



    container.append(login)

    return(container)
  }
}

