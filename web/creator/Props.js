class Props {
    constructor(props) {
        this.node = this.render(props)
    }
    get() {
        return this.node
    }
}
export default Props