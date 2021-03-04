import List from '../components/List.js'
import links from '../components/Links.js'

let linkCompiled = new List(links)
linkCompiled.get().children[3].children[0].classList.add('play-now')

export default linkCompiled