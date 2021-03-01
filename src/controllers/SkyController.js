import { getSky } from '../basic/Sky.js'

let target = () => null
let interval = setInterval(() => {
    let sky = getSky()
    let t = target()
    if (t != null && sky != null) {
        sky.position.x = t.position.x
        sky.position.z = t.position.z
        // console.log('repositioning sky');
    }
    
}, 1000 * 3);

let skyFollow = (cb) => {
    target = cb
}

export default skyFollow