import tmp from '../Tmp.js'

let msg = document.createElement('div')
msg.innerText = "Connect to the socket.io & peer.js servers"
let btn = document.createElement('input')
btn.setAttribute('type', 'button')
btn.value = 'Connect'


let msgContainer = document.createElement('div')
msgContainer.classList.add('ui-socket')


msgContainer.appendChild(msg)
msgContainer.appendChild(btn)

let showConnectionForm = () => { document.body.appendChild(msgContainer) }
let hideConnectionForm = () => { tmp.appendChild(msgContainer) }

let callback = () => { console.log(input.value); }
let submit = () => { callback() }
let setCallback = (cb) => { callback = cb }

btn.addEventListener('click', submit)

export default {
    show:showConnectionForm,
    hide:hideConnectionForm,
    setCallback
}