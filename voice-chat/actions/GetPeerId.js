import getPeer from '../Peer.js'
import mySelf from '../MySelf.js'

let getPeerId = () => {
    return new Promise((resolve, reject) => {
        let peer = getPeer()
        peer.on('open', id => {
            mySelf.id = id
            resolve(mySelf.id)
        })
    })
}

export default getPeerId