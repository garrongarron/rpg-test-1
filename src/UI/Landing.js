import run from "../../voice-chat/app.js"

let logoBackground = () =>{
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
    }, 7*1000);
}

let background = document.createElement('div')
background.classList.add('logo-background')
background.innerText = 'Click to start'

background.addEventListener('click', logoBackground)

document.body.appendChild(background)

let logo = document.createElement('div')
logo.classList.add('logo')
logo.innerText = 'The Warrior'
document.body.appendChild(logo)

let audio = document.createElement('audio')
audio.src = 'audios/Intro.2.mp3'
document.body.appendChild(audio)

document.addEventListener('click', start)