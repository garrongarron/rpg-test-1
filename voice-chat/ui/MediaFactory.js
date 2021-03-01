let mediaFactody = () =>{
    let audio = document.createElement('audio')
    audio.setAttribute('controls', 'controls')
    audio.setAttribute('autoplay', 'autoplay')
    document.body.appendChild(audio)
    return audio
}

export default mediaFactody