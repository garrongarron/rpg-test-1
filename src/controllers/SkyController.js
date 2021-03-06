import { getSky } from '../basic/Sky.js'
import machine from '../basic/Machine.js'

let target = () => null
// let interval = setInterval(() => {
//     let sky = getSky()
//     let t = target()
//     if (t != null && sky != null) {
//         sky.position.x = t.position.x
//         sky.position.z = t.position.z
//         // console.log('repositioning sky');
//     }
    
// }, 1000 * 3);


machine.addCallback(()=>{
    let sky = getSky()
    let t = target()
    if (t != null && sky != null) {
        sky.position.x = t.position.x
        sky.position.z = t.position.z
        // console.log('repositioning sky');
    }
})

let skyFollow = (cb) => {
    target = cb
}

export default skyFollow