import getPeer from './Peer.js'
import mediaFactody from './ui/MediaFactory.js'
import addVideoStream from './Player.js'
import tmp from './Tmp.js'

let answer = (stream) => {
    let myPeer = getPeer()
    myPeer.on('call', call => {
        let audio, contenedor, userList
        call.answer(stream)
        call.on('stream', hisStream => {
            audio = mediaFactody()
            contenedor = document.querySelector('.u-' + call.peer)
            if(contenedor == null){
                contenedor = document.createElement('ul')
                tmp.appendChild(contenedor)
                contenedor.classList.add('u-' + call.peer)
                userList = document.querySelector('.multiplayer-list')
                if(userList != null){
                    userList.appendChild(contenedor)
                }
            }
            contenedor.appendChild(audio)
            addVideoStream(audio, hisStream)
        })
        call.on('close', () => {
            audio.remove()
        })
    })
}

export default answer