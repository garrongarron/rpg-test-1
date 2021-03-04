import cache from './Cache.js'
import container from './Container.js'

class Page {
    constructor(node) {
        this.node = node
    }
    getNode() {
        return this.node
    }
    show() {
        container.appendChild(this.node)
    }
    hide() {
        cache.appendChild(this.node)
    }
}

export default Page