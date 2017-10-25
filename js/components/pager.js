export default class Pager {
  constructor (options) {
    this.options = options
  } 

  getContent() {
    let container = document.createElement('div')
    container.style.display = 'flex'
    container.classList.add(this.options.columnClass)

    let leftArrowIcon = document.createElement('img')
    leftArrowIcon.src = '/images/left-arrow.png'
    leftArrowIcon.style.color = '#D8D8D8'
    leftArrowIcon.style.marginTop = '0'
    leftArrowIcon.style.marginBottom = '0'
    leftArrowIcon.style.marginRight = '10px'
    leftArrowIcon.style.marginLeft = '0'
    leftArrowIcon.style.padding = '0'
    leftArrowIcon.onclick = this.options.onPrevious

    leftArrowIcon.onmouseover = () => {
      leftArrowIcon.style.color = '#77A3B9'
      leftArrowIcon.style.cursor = 'pointer'
    }

    leftArrowIcon.onmouseout = () => {
      leftArrowIcon.style.color = '#D8D8D8'
      leftArrowIcon.style.cursor = 'default'
    }

    container.append(leftArrowIcon)

    let pageInfo = document.createElement('div')
    pageInfo.id = this.options.id
    pageInfo.style.color = '#303030'

    pageInfo.append(this.options.info)

    this.pageInfo = pageInfo

    container.append(pageInfo)

    let rightArrowIcon = document.createElement('img')
    rightArrowIcon.src = '/images/right-arrow.png'
    rightArrowIcon.style.color = '#D8D8D8'
    rightArrowIcon.style.marginTop = '0'
    rightArrowIcon.style.marginBottom = '0'
    rightArrowIcon.style.marginRight = '0'
    rightArrowIcon.style.marginLeft = '10px'
    rightArrowIcon.style.padding = '0'
    rightArrowIcon.onclick = this.options.onNext

    rightArrowIcon.onmouseover = () => {
      rightArrowIcon.style.color = '#77A3B9'
      rightArrowIcon.style.cursor = 'pointer'
    }

    rightArrowIcon.onmouseout = () => {
      rightArrowIcon.style.color = '#D8D8D8'
      rightArrowIcon.style.cursor = 'default'
    }

    container.append(rightArrowIcon)

    return container
  }
}
