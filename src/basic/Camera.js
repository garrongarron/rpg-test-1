const fov = 40;
const aspect = screen.width / screen.height; //1920 / 1080;
const near = .1;
const far = 1000.0;

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(15, -2, 15);
camera.lookAt(0,1, 0);

export default camera