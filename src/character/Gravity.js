import scene from '../Scene.js'
import { directionalLight } from '../basic/Lights.js'
let radio = 10

let lightPositioning =  false
class Gravity {
    check(position) {
        let ray = new THREE.Raycaster(
            new THREE.Vector3(
                position.x,
                position.y + 1,
                position.z),
            new THREE.Vector3(0, -1, 0),
            0,
            10
        );
        if(lightPositioning){
            lightPositioning = false
            directionalLight.position.x = position.x
            directionalLight.position.z = position.z
            directionalLight.target.position.set(position.x, directionalLight.target.position.y , position.z);
            directionalLight.target.updateMatrixWorld();

        }

        let tmp = ray.intersectObjects(scene.children, true).filter(obj => obj.object.name != "Paladin_J_Nordstrom")[0]
        let isGrounded = !!tmp && tmp.distance < 10
        return {
            isGrounded: isGrounded,
            radio: radio,
            tmp: tmp
        }
    }
}

setInterval(() => {
    lightPositioning = true
}, 1000*1);
let gravity = new Gravity()
export default gravity