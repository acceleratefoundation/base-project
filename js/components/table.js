export default class Table {
  constructor (options) {
    this.options = options
  }

   getContent() {
    let container = document.createElement('div')
    container.classList.add(this.options.columnClass)
    
    let table = document.createElement('div')
    table.id = this.options.id
    table.classList.add(this.options.columnClass)
    
    table.style.backgroundColor = 'transparent'
    table.style.borderRadius = '5px 5px 5px 5px'
    let rowBackgroundColor = ''
    this.options.data.forEach((item,index) => {
      // create the dom Element

      let tableRow = document.createElement( 'div' )
      tableRow.style.display = 'flex'
      tableRow.style.border = '1px solid #fafafa'
      tableRow.style.fontSize = '24px'
      tableRow.style.color = '#ffffff'
      tableRow.style.borderTop = '1px'
      if((index + 1) % 2 === 0) {
        tableRow.style.backgroundColor = 'rgba(0, 0, 0, 0.)'
      }
      else {
        tableRow.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
      }
      let tableData = document.createElement('div')
      tableData.style.flex = '1'
      tableData.style.padding = '10px 10px'
      let tableName = document.createElement('div')
      tableName.innerHTML = `
        <div>
          <div style="font-weight: bold;">
            ${item[this.options.design.name.title]}
          </div>
          <div>
            ${item[this.options.design.name.description]}
          </div>
        </div>
      `
      tableData.append(tableName)
      tableRow.append(tableData)
    
      table.append(tableRow)
    
      let buttonWidget = document.createElement('button')
      buttonWidget.style.backgroundColor = 'rgba(0,0,0,0.2)'
      buttonWidget.style.width = '10%'
      buttonWidget.style.borderRadius = '5px'
      buttonWidget.style.textAlign = 'center'
      buttonWidget.style.color = '#ffffff'
      buttonWidget.style.textTransform = 'uppercase'
      buttonWidget.append(document.createTextNode('Open'))

      tableRow.append(buttonWidget)


    })

     
    return(table)
  }
}
