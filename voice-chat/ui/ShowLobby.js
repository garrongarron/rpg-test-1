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