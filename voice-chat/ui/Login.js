import tmp from '../Tmp.js'

let msg = document.createElement('div')
msg.innerText = "Write your name"
let input = document.createElement('input')
input.setAttribute('type', 'text')
input.setAttribute('placeholder', 'Other Name')
let btn = document.createElement('input')
btn.setAttribute('type', 'button')
btn.value = 'Save'
let msgContainer = document.createElement('div')
msgContainer.classList.add('ui-login')

msgContainer.appendChild(msg)
msgContainer.appendChild(input)
msgContainer.appendChild(btn)


let showLoginForm = () => { document.body.appendChild(msgContainer) }
let hideLoginForm = () => { tmp.appendChild(msgContainer) }

input.addEventListener('keydown', (e) => {
    if (e.keyCode == 13 && input.value.length > 3) {
        submit()
    }
})
let validations = () => {
    input.value = input.value.replace(/[^a-zA-Z0-9]/gi, '');
    input.value = input.value.substring(0, 10)
}
let callback = () => { console.log(input.value); }
let setCallback = (cb) => { callback = cb }
let submit = () => { callback(input.value) }

btn.addEventListener('click', () => {
    if (input.value.length > 3){
        submit()
    }
})
input.addEventListener('keyup', validations)
input.addEventListener('paste', () => {
    setTimeout(() => {
        validations()
    }, 10);
})


let form = {
    show: showLoginForm,
    hide: hideLoginForm,
    setCallback
}

export default form