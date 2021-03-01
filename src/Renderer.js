import scene from './Scene.js'
import camera from './basic/Camera.js'
import machine from './basic/Machine.js'

import { EffectComposer } from 'https://cdn.jsdelivr.net/npm/three@0.122/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'https://cdn.jsdelivr.net/npm/three@0.122/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'https://cdn.jsdelivr.net/npm/three@0.122/examples/jsm/postprocessing/UnrealBloomPass.js';



// import './UI/Keys.js'
// import './sw/ServiceWorker.js'

let renderer = new THREE.WebGLRenderer(
    {
        //document.body.appendChild(renderer.domElement);
        canvas: document.getElementById('c'),
        antialias: true
    }
);
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;//THREE.BasicShadowMap;
renderer.setClearColor(0xFFFFFF);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMappingExplosure = 8.3

let postProcessing = false
let composer 
if (postProcessing) {
    composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);
    composer.addPass(new UnrealBloomPass({ x: 1360 / 35, y: 768 / 32 }, 0.5, 0.0, .9));
}

let resize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight)
}
window.addEventListener('resize', resize, false);
resize()
// setControls(camera, renderer)
machine.addCallback(() => {
    if (postProcessing) {
        composer.render();
    } else {
        renderer.render(scene, camera);
    }


})
machine.run()
