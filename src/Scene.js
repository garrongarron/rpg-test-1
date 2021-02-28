import { directionalLight, ambientLight , hemiLight} from './basic/Lights.js'
// import texture from './basic/Cube.js'
import setSky from './basic/Sky.js'
import setFog from './basic/Fog.js'
import loadCharacter, { loadAnimations } from './basic/Character.js'
import box from './objects/Box.js'
import plane from './objects/Plane.js'
import loadPlaneTerrain from './objects/PlaneTerrain.js'
import mouseController from './controllers/MouseController.js';
import setCharacter, { mode, setController } from './controllers/CharacterController.js';

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
scene.add(box);

// scene.add(plane);

loadCharacter(scene, (palading)=>{
    mouseController(palading)
    setCharacter(palading)
    loadAnimations(()=>{
        setController(mode.forwardBackwardAndRotation)
    })
})


loadPlaneTerrain(scene)











export default scene