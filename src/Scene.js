import { directionalLight, ambientLight, hemiLight, pointLight } from './basic/Lights.js'
import setSky from './basic/Sky.js'
import setFog from './basic/Fog.js'
// import loadCharacter, { loadAnimations, getCharacter } from './basic/Character.js'
// import box from './objects/Box.js'
import water from './objects/Water.js'
import loadPlaneTerrain, { setTarget } from './objects/PlaneTerrain.js'
import mouseController from './controllers/MouseController.js';
// import setCharacter, { mode, setController } from './controllers/CharacterController.js';
import './UI/Fade.js'
import './UI/Movements.js'
import './UI/Landing.js'
// import run from "../voice-chat/app.js"
import skyFollow from './controllers/SkyController.js'
import './controllers/Broadcast.js'
import { setCharacter as setCharacterToSpawn } from './controllers/Spawner.js'
import getPaladinPromise from './basic/MainCharacter.js'
import loadTrees from './objects/Trees.js'
import loadHeadquarter from './models/buildings/Headquarter.js'
import loadTend from './models/buildings/Tend.js'
import loadTendB from './models/buildings/Tend_b.js'
// import arrowHelper from './objects/Arrow.js'
import inFront from './character/InFront.js'
import getInventory from './models/inventory/Inventory.js'



// run()

const scene = new THREE.Scene();

//lights
scene.add(directionalLight);
scene.add(ambientLight);
scene.add(hemiLight);
scene.add( pointLight );

if (false) {
    //cube
    scene.background = texture;
} else {
    //sky
    setSky(scene)
    setFog(scene)

}


//trees
loadTrees(scene)//ok

//character
// scene.add(box);

scene.add(water);


getPaladinPromise().then(paladin => {
    scene.add(paladin) 
    paladin.position.set(123.66827816140201, -0.6073749816485225, -142.87066427145885)
    skyFollow(() => paladin)
    mouseController(paladin)
    setCharacterToSpawn(paladin, scene)
    setTarget(paladin)
    inFront(paladin, scene)
    getInventory(paladin, scene)
})
// scene.add( arrowHelper )
loadPlaneTerrain(scene)

loadHeadquarter(scene)


loadTend(scene)
loadTendB(scene)




export default scene