import run from "../../voice-chat/app.js"

let logoBackground = () => {
    background.innerText = ''
    background.style.cursor = 'inherit';
    background.removeEventListener('click', logoBackground)
}

let start = () => {
    setTimeout(() => {
        audio.play();
        fadeTologo()//1
    }, 1000);
    document.removeEventListener('click', start)
}

let fadeTologo = () => {
    logo.style.display = 'block'
    logo.classList.add('logo-fadeIn')//new

    background.style.opacity = 0
    background.classList.add('logo-background-fadeOut')//new
    setTimeout(() => {
        background.remove()
        logo.remove()
        run()
    }, 7 * 1000);
}
let background = document.createElement('div')
background.classList.add('logo-background')


document.body.appendChild(background)


let audio = document.createElement('audio')
audio.src = 'audios/Intro.2.mp3'

let logo = document.createElement('div')
logo.classList.add('logo')
logo.innerText = 'The Warrior'
let begin = () => {
    // background.innerText = 'Click to start'
    document.body.appendChild(audio)
    background.addEventListener('click', logoBackground)
    document.body.appendChild(logo)
    start()
}

export default begin