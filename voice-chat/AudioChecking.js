import answer from './Answer.js'
import muteControl from './Mute.js'
let myStream = null
let checkAudio = () => {
    navigator.getMedia = (navigator.getUserMedia || // use the proper vendor prefix
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia);
    if (typeof navigator.getMedia == 'undefined') {
        console.error(` Undefined!!!!
        navigator.getMedia = (navigator.getUserMedia || // use the proper vendor prefix
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia);
    `);
    }
    navigator.getMedia({ video: false, audio: true }, function () {
        console.log(`// Audio is available`);
        navigator.mediaDevices.getUserMedia({
            video: false,
            audio: true
        }).then(stream => {
            answer(stream)
            muteControl(stream)
            myStream = stream
        }).catch(e => {
            console.error(e)
            answer(null)
        })
    }, function () {
        answer(null)
        console.error(`// Audio is not available`);
    });
}

let getMyStream = () => {
    return myStream
}

export default checkAudio
export { getMyStream }

