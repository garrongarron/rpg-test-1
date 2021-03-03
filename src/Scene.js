import { directionalLight, ambientLight, hemiLight } from './basic/Lights.js'
import setSky from './basic/Sky.js'
import setFog from './basic/Fog.js'
// import loadCharacter, { loadAnimations, getCharacter } from './basic/Character.js'
import box from './objects/Box.js'
import plane from './objects/Plane.js'
import loadPlaneTerrain from './objects/PlaneTerrain.js'
import mouseController from './controllers/MouseController.js';
// import setCharacter, { mode, setController } from './controllers/CharacterController.js';
import './UI/Fade.js'
import './UI/Landing.js'
// import run from "../voice-chat/app.js"
import skyFollow from './controllers/SkyController.js'
import './controllers/Broadcast.js'
import {setCharacter as setCharacterToSpawn} from './controllers/Spawner.js'
import getPaladinPromise from './basic/MainCharacter.js'

// run()

const scene = new THREE.Scene();

//lights
scene.add(directionalLight);
scene.add(ambientLight);
scene.add(hemiLight);

if (false) {
    //cube
    scene.background = texture;
} else {
    //sky
    setSky(scene)
    setFog(scene)

}




//character
// scene.add(box);

// scene.add(plane);

getPaladinPromise().then(paladin => {
    scene.add(paladin)
    skyFollow(() => paladin)
    mouseController(paladin)
    setCharacterToSpawn(paladin, scene)
})


loadPlaneTerrain(scene)











export default scene