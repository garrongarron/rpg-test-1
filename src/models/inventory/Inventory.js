import gravity from '../../character/Gravity.js'
import machine from '../../basic/Machine.js'
import keyListener from '../../basic/KeyListener.js'

let inventory = []

let i = 0
let nn = 0
let createItems = (scene) => {
    while (i < 4 && nn < 200) { //&& nn < 2000
        nn++
        let p = {
            x: Math.random() * 50 - 25,
            y: 0,
            z: Math.random() * 50 - 25
        }
        let g = gravity.check(p)
        if (g.tmp) {
            p.y = 1 - g.tmp.distance
            const item = new THREE.Mesh(
                new THREE.BoxGeometry(1, 1, 1),
                new THREE.MeshStandardMaterial({
                    color: 0xFFD700,
                }));
            item.castShadow = true;
            item.receiveShadow = true;
            item.position.set(p.x, p.y + 1, p.z)
            scene.add(item)


            //collider
            let cubeContainer = new THREE.Box3();
            cubeContainer.setFromObject(item);
            inventory.push([cubeContainer, item])
            i++
        }
    }
}

let paladingCube = new THREE.Box3();
let colision = false
let hasColision = () =>{
    return colision
}

let getInventory = (paladin, scene) => {
    createItems(scene)
    let cubeBoxHelper = new THREE.BoxHelper(paladin, 0xff0000);
    cubeBoxHelper.visible = false;
    scene.add(cubeBoxHelper)
    machine.addCallback(() => {
        colision = false
        paladingCube.setFromObject(paladin);
        cubeBoxHelper.update();
        inventory.map(aabb => {
            if (paladingCube.intersectsBox(aabb[0])) {
                colision = true
                console.log('colision');
                if(keyListener.isPressed(32)){
                    aabb[1].position.y = -100
                    aabb[0].setFromObject(aabb[1])
                }
            }
        })
        
    })

}

export default getInventory
export { hasColision }