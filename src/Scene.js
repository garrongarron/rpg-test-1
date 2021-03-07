import { directionalLight, ambientLight, hemiLight } from './basic/Lights.js'
import setSky from './basic/Sky.js'
import setFog from './basic/Fog.js'
// import loadCharacter, { loadAnimations, getCharacter } from './basic/Character.js'
import box from './objects/Box.js'
import water from './objects/Water.js'
import loadPlaneTerrain, { setTarget } from './objects/PlaneTerrain.js'
import mouseController from './controllers/MouseController.js';
// import setCharacter, { mode, setController } from './controllers/CharacterController.js';
import './UI/Fade.js'
import './UI/Landing.js'
// import run from "../voice-chat/app.js"
import skyFollow from './controllers/SkyController.js'
import './controllers/Broadcast.js'
import { setCharacter as setCharacterToSpawn } from './controllers/Spawner.js'
import getPaladinPromise from './basic/MainCharacter.js'
import loadTrees from './objects/Trees.js'
import loadHeadquarter from './models/buildings/Headquarter.js'




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


//trees
loadTrees(scene)//ok

//character
// scene.add(box);

scene.add(water);


getPaladinPromise().then(paladin => {
    scene.add(paladin)
    paladin.position.set(0.29589998756613767, -3.9426677459998634, -1.8808037406017266)
    skyFollow(() => paladin)
    mouseController(paladin)
    setCharacterToSpawn(paladin, scene)
    setTarget(paladin)
})

loadPlaneTerrain(scene)






loadHeadquarter(scene)





export default scene