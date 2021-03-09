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



input.addEventListener('focus', () => {
    msg.innerText = "More than 3 letters"
})
input.addEventListener('blur', () => {
    msg.innerText = "Write your name"
})



let showLoginForm = () => {
    document.body.appendChild(msgContainer)
    //Place the arrow to lead the player
    let info = input.getBoundingClientRect()
    let arrow = document.querySelector('.arrow-container')
    arrow.classList.remove('hide')
    let x = (info.x+info.width)+'px'
    arrow.style.left = x
    arrow.style.top = (info.top-50)+'px'
    console.log(info, x);
}
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
    if (input.value.length > 3) {
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