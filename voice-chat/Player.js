//recibo audio
function addVideoStream(audio, stream) {
    audio.srcObject = stream
    audio.addEventListener('loadedmetadata', () => {
        audio.play()
    })
}

export default addVideoStream