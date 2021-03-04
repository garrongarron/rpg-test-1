import tmp from '../Tmp.js'

let msg = document.createElement('div')
msg.innerText = "Ready to"
// msg.innerText = "Connect to the socket.io & peer.js servers"
let btn = document.createElement('input')
btn.setAttribute('type', 'button')
btn.value = 'Connect'


let msgContainer = document.createElement('div')
msgContainer.classList.add('ui-socket')


msgContainer.appendChild(msg)
msgContainer.appendChild(btn)

let showConnectionForm = () => {
    document.body.appendChild(msgContainer)
    //Place the arrow to lead the player
    let info = btn.getBoundingClientRect()
    let arrow = document.querySelector('.arrow-container')
    arrow.classList.remove('hide')
    let x = (info.x + info.width) + 'px'
    arrow.style.left = x
    arrow.style.top = (info.top - 50) + 'px'
    console.log(info, x);
}
let hideConnectionForm = () => { tmp.appendChild(msgContainer) }

let callback = () => { console.log(input.value); }
let submit = () => {
    let arrow = document.querySelector('.arrow-container')
    arrow.classList.add('hide')
    callback()
}
let setCallback = (cb) => { callback = cb }

btn.addEventListener('click', submit)

export default {
    show: showConnectionForm,
    hide: hideConnectionForm,
    setCallback
}