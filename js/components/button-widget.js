export default class ButtonWidget {
  constructor (options) {
    this.options = options
  } 

  getContent() {
    let container = document.createElement('div')
    container.id = this.options.id
    container.classList.add(this.options.columnClass)

    let buttonWidget = document.createElement('div')
    buttonWidget.style.backgroundColor = '#ffffff'
    buttonWidget.style.padding = '25px 30px'
    buttonWidget.style.borderRadius = '5px'
    buttonWidget.style.textAlign = 'center'
    buttonWidget.style.color = '#000000'
    buttonWidget.style.textTransform = 'uppercase'
    buttonWidget.style.flex = '1'
    buttonWidget.append(document.createTextNode('Open'))

    container.append(buttonWidgetWidget)

    
    return container
  } 
  
}

    
