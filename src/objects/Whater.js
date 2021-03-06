import { Water } from 'https://threejs.org/examples/jsm/objects/Water2.js'
const waterGeometry = new THREE.PlaneGeometry(20, 20);

const params = {
    color: '#ffffff',
    scale: 4,
    flowX: 1,
    flowY: 1
};
let water = new Water(waterGeometry, {
    color: params.color,
    scale: params.scale,
    flowDirection: new THREE.Vector2(params.flowX, params.flowY),
    textureWidth: 1024,
    textureHeight: 1024
});

water.position.y = 1;
water.position.y = -0
water.rotation.x = Math.PI * - 0.5;
// water.material.uniforms[ 'config' ].value.w = 2;
// water.material.uniforms[ 'flowDirection' ].value.x = 1;
// water.material.uniforms['flowDirection'].value.y = 1;
// water.material.uniforms['flowDirection'].value.normalize();
export default water
