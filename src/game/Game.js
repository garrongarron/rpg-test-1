import keyListener from '../basic/KeyListener.js'
import start from '../../ui/app.js'

let startGame = () =>{
    document.querySelector('.keys-to-move').classList.remove('hide')
    keyListener.start()
    start()
}

export default startGame