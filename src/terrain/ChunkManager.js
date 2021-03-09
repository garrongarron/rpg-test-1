import getBlend from '../textures/Blend.js'
import noise from '../shaders/NoiseMaker.js'


class ChunkManagers {

    constructor(params, scene, unit) {
        this.chunks = new Map()
        this.chunksId = 0
        this.mainChunk = null
        this.scene = scene
        this.prevOffset = { x: 1, y: 1 }
        this.gen = new noise.Noise(params)
        this.unit = unit
    }

    create(offset, size, subdivision) {
        // console.log('creating**********');
        const geometry = new THREE.PlaneGeometry(size, size, subdivision, subdivision);
        const material = getBlend();
        let plane = new THREE.Mesh(geometry, material);
        plane.rotation.x = -Math.PI / 2;
        plane.position.y = -7;
        plane.castShadow = true;
        plane.receiveShadow = true;
        plane.position.x = offset.x
        plane.position.z = offset.y
        return plane
    }
    updateChunks(offset) {
        // console.log('Updating???', offset);
        this.mainChunk.position.x = offset.x
        this.mainChunk.position.z = offset.y
        this.modifyVerticalPosition(offset, this.mainChunk)
        let newone = []
        let needed = []
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                if (!(i == j && i == 0)) {
                    let offset_i = {
                        x: offset.x + this.unit * i,
                        y: offset.y + this.unit * j
                    }
                    //todos los que necesito
                    needed.push(offset_i.x + ':' + offset_i.y)
                    //los nuevos que no estan
                    if (!this.chunks.has(offset_i.x + ':' + offset_i.y)) {
                        newone.push(offset_i)
                    }
                }
            }
        }
        //los que me sobran
        let outOfDate = []
        this.chunks.forEach((chunk, value) => {
            if (!needed.includes(value)) {
                outOfDate.push(value)
            }
        })

        while (outOfDate.length != 0) {
            // console.log('outOfDate XD');
            let old = outOfDate.shift()
            let tmpChunk = this.chunks.get(old)
            this.chunks.delete(old)
            let offset = newone.shift()
            // console.log('b', offset);
            tmpChunk.position.x = offset.x
            tmpChunk.position.z = offset.y
            this.modifyVerticalPosition(offset, tmpChunk)
            this.chunks.set(offset.x + ':' + offset.y, tmpChunk)
        }
        this.prevOffset = offset
    }
    
    getArround(offset) {
        if(offset.x== this.prevOffset.x && offset.y ==this.prevOffset.y){
            return
        }
        
        if(this.mainChunk != null){
            this.updateChunks(offset)

            return
        }
        
        this.prevOffset = offset
        
        this.mainChunk = this.create(offset, this.unit *1.0, 100)
        
        this.scene.add(this.mainChunk);
        this.modifyVerticalPosition(offset, this.mainChunk)

        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                if (!(i == j && i == 0)) {
                    let offset_i = {
                        x: offset.x + this.unit * i,
                        y: offset.x + this.unit * j
                    }
                    this.chunks.set(offset_i.x + ':' + offset_i.y, this.create(offset_i, this.unit, 100))
                    this.scene.add(this.chunks.get(offset_i.x + ':' + offset_i.y));
                    this.modifyVerticalPosition(offset_i, this.chunks.get(offset_i.x + ':' + offset_i.y))
                }
            }
        }
    }

    modifyVerticalPosition(offset, plane) {
        // console.log('modifyVerticalPosition**********', offset);
        for (let v of plane.geometry.vertices) {
            v.z = this.gen.Get(v.x + offset.x, v.y - offset.y)
        }
        plane.geometry.verticesNeedUpdate = true;
        plane.geometry.dynamic = true;
    }
}


export default ChunkManagers