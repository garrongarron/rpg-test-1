import machine from '../basic/Machine.js'
import { cubeContainer } from '../objects/Box.js'


let paladingCube = new THREE.Box3();

let target = null
let scene = null
let paladingHelper = null

let inFront = (t, s) => {
    target = t
    scene = s
}
let collision = false
machine.addCallback(() => {
    collision = false
    if (target == null) return
    if (paladingHelper == null) {
        // paladingHelper = new THREE.BoxHelper(target, 0x00ff00);
        // paladingHelper.update();
        // paladingHelper.visible = true;
        // paladingHelper.name = 'Helper'
        // scene.add(paladingHelper)
        // console.log("HELPER DONE");
    }

    // paladingHelper.update();

    // paladingCube.setFromObject(target);
    // if (cubeContainer.intersectsBox(paladingCube)) {
    //     console.log('collision');
    //     collision = true
    // }
    // treesColiders.map(treeCollider => {
    //     if (treeCollider.intersectsBox(paladingCube)) {
    //         console.log('collision');
    //         collision = true
    //     }
    // })


    let dir = new THREE.Vector3(
        target.position.x + Math.sin(target.rotation.y) * 15,
        target.position.y + 1.5,
        target.position.z + Math.cos(target.rotation.y) * 15
    )

    let origin = new THREE.Vector3(
        target.position.x,
        target.position.y + 1.5,
        target.position.z)
    let ray = new THREE.Raycaster(
        origin,
        dir.addVectors(dir, origin.clone().negate()).normalize(),
        .5,
        2);
    let tmp = ray.intersectObjects(scene.children, true).filter(obj => {
        return obj.object.name != "Paladin_J_Nordstrom" && obj.object.name != "" && obj.object.name != "Helper"
    })[0]
    if (tmp) {
        // console.log(dir);
        console.log(tmp.object.name);
        collision = true
    }

})

export default inFront
export { collision}