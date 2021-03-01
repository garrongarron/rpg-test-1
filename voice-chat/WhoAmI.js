import { mute } from './Mute.js'

let setName = (name) => {
    let div = document.createElement('div')
    div.classList.add('whoami')
    div.innerHTML = name
    div.appendChild(mute)
    document.body.appendChild(div)
}

let getWhoami = () => {
    return div
}

export default setName
export { getWhoami }