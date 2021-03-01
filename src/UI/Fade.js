import keyListener from '../basic/KeyListener.js'
import { getDelta } from '../basic/Clock.js'

if (keyListener.isPressed(70)) {

}
let flag = false
document.addEventListener('keydown', (e) => {
    if (e.keyCode == 70) {
        flag = !flag
        clearInterval(interval)
        if(flag){
            fadeToBlack()
        } else {
            fadeFromBlack()
        }
    }
})



let black = document.createElement('div')
black.classList.add('black')
document.body.appendChild(black)

let interval = 0
let opacity
let maximum = .8
let time = .25
let fadeToBlack = () => {
    opacity = 0
    black.style.display = 'block'
    interval = setInterval(() => {
        opacity += getDelta()*(1/time)
        if (opacity > maximum) {
            opacity = maximum
            clearInterval(interval)
        }
        black.style.opacity = opacity
    }, 1000 * getDelta());
}
let fadeFromBlack = () => {
    interval = setInterval(() => {
        opacity -= getDelta()*(1/time)
        if (opacity < 0) {
            opacity = 0
            clearInterval(interval)
            black.style.display = 'none'
        }
        black.style.opacity = opacity
    }, 1000 * getDelta());
}

// fadeToBlack()

export default fadeToBlack