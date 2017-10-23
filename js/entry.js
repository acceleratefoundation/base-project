import Home from './containers/home'

export default class Entry {
  constructor() {
    document.body.style.background = 'url("/images/background.png") no-repeat center center fixed'
    document.body.style.backgroundSize = 'cover'
    document.body.style.height = '100%'
    document.body.style.margin = '0'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundAttachment = 'fixed'
  }
}

let entry = new Entry()
window.entry = entry

let content = document.getElementById('content')

let homeContainer = new Home()
content.append(homeContainer.getContent())
