import run from "../../voice-chat/app.js"

let background = document.createElement('div')
background.classList.add('logo-background')
background.innerText = 'Fede'

document.body.appendChild(background)

let logo = document.createElement('div')
logo.classList.add('logo')
document.body.appendChild(logo)

let audio = document.createElement('audio')
audio.src = 'audios/Intro.2.mp3'
document.body.appendChild(audio)
let start = () => {
   
    setTimeout(() => {
        audio.play();
        fadeTologo()
        setTimeout(() => {
            fadeFromlogo()
        }, 1000 * 3);
    }, 1000);
    console.log('ok');
    document.removeEventListener('click', start)
}
document.addEventListener('click', start)


let getDelta = () => .017

let interval = 0
let opacity = 0
let maximum = .8
let time = .9
let fadeTologo = () => {
    opacity = 0
    logo.style.display = 'block'
    interval = setInterval(() => {
        opacity += getDelta() * (1 / time)
        if (opacity > maximum) {
            opacity = maximum
            clearInterval(interval)
        }
        logo.style.opacity = opacity
    }, 1000 * getDelta());
}
let fadeFromlogo = () => {
    interval = setInterval(() => {
        opacity -= getDelta() * (1 / time)
        if (opacity < 0) {
            opacity = 0
            clearInterval(interval)
            logo.style.display = 'none'
            fadeOut()
        }
        logo.style.opacity = opacity
    }, 1000 * getDelta());
}

let fadeOut =()=>{
    opacity = 1
    interval = setInterval(() => {
        opacity -= getDelta() * (1 / 3)
        if (opacity < 0) {
            opacity = 0
            clearInterval(interval)
            background.style.display = 'none'
            run()
        }
        background.style.opacity = opacity
    }, 1000 * getDelta());
}
logo.style.display = 'none'
logo.style.opacity = opacity



