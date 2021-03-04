import getNewRoomBtn from './NewRoomBtn.js'
import tmp from '../Tmp.js'

let userList = document.createElement('ul')
userList.classList.add('userlist')
let listContainer = document.createElement('div')

listContainer.appendChild(userList)
listContainer.classList.add('list-container')


let setUsers = (arrayUser) => {
    document.body.appendChild(listContainer)
    listContainer.querySelectorAll('li').forEach(li => {
        li.classList.add('hide')
    })
    arrayUser.map(user => {
        let li = document.querySelector('.u-' + user)
        if (!li) {
            li = document.createElement('li')
            li.classList.add('u-' + user)
            callbacks.forEach(cb => {
                cb(li)
            })
        }
        li.classList.remove('hide')
        li.innerText = user
        userList.appendChild(li)
    })

    listContainer.querySelectorAll('li.hide').forEach(li => {
        li.remove()
    })

    if (userList.children.length == 0) {
        let newRoom = document.createElement('li')
        newRoom.appendChild(getNewRoomBtn())
        userList.appendChild(newRoom)
    }
     //Place the arrow to lead the player
     let info = userList.getBoundingClientRect()
     let arrow = document.querySelector('.arrow-container')
     arrow.classList.remove('hide')
     arrow.style.transform = 'rotateZ(-135deg)';
     let x = (info.x -50) + 'px'
     arrow.style.left = x
     arrow.style.top = (info.top) + 'px'
}

let callbacks = []
let addCallbacks = (cb) => {
    callbacks.push(cb)
}


let hideRooms = () =>{
    tmp.appendChild(listContainer)
}
export default setUsers
export { addCallbacks, hideRooms }