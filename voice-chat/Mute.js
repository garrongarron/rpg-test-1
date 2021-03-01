let mute = document.createElement('div')

let btn = document.createElement('button')
btn.innerText = 'Mute'
btn.classList.add('red')
btn.classList.add('hide')

btn.addEventListener('click', () => {
    if (btn.classList.contains('red')) {
        btn.classList.add('gray')
        btn.classList.remove('red')
    } else {
        btn.classList.add('red')
        btn.classList.remove('gray')
    }
    try {
        volumen.stream.getTracks().forEach(track => {
            track.enabled = !track.enabled
        });
    } catch (error) {
        console.warn(error);
    }  
})

mute.appendChild(btn)

let volumen = { stream: null }
let muteControl = (stream) => {
    volumen.stream = stream
    btn.classList.remove('hide')
}
export { mute }
export default muteControl