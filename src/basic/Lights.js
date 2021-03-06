let directionalLight = new THREE.DirectionalLight(0x888888, 1.0);
directionalLight.position.set(0, 100,0);
directionalLight.target.position.set(0, 0, 0);
directionalLight.castShadow = true;
directionalLight.shadow.bias = -0.01;
directionalLight.shadow.mapSize.width = 2048*2;
directionalLight.shadow.mapSize.height = 2048*2;
directionalLight.shadow.camera.near = 0.5;
directionalLight.shadow.camera.far = 150.0;
let gap = 100
directionalLight.shadow.camera.left = gap;
directionalLight.shadow.camera.right = -gap;
directionalLight.shadow.camera.top = gap;
directionalLight.shadow.camera.bottom = -gap;
directionalLight.target.updateMatrixWorld();



let hemiLight = new THREE.HemisphereLight(0xffeeb1, 0xffeeb1, 1)

let ambientLight = new THREE.AmbientLight(0xffffff, 0.125);//0x303030


export {directionalLight, ambientLight, hemiLight}