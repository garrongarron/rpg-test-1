import mySelf from './MySelf.js'

let myRooom = document.createElement('div')
myRooom.classList.add('my-room')
myRooom.innerText = 'No room Selected'
let setRoom = () =>{
    document.body.appendChild(myRooom)
    myRooom.innerText = 'Room: '+mySelf.room
}
export default setRoom