import mySelf from "./MySelf.js"
import { getMyStream } from './AudioChecking.js'
import getPeer from './Peer.js'
import { connectWith } from './ConnectionHandler.js'
let userList

const populate = (arr) => {
    createUserList()//if not exist
    hideAllUSers()
    for (const key in arr[1]) {
        if (arr[1].hasOwnProperty(key) && mySelf.id != key) {
            showUser(arr[1], key)
        }
    }
    deleteUsersHidden()
}

let deleteUsersHidden = () => {
    let hiddenUsers = document.querySelectorAll('.multiplayer-list li.hide')
    hiddenUsers.forEach(user => {
        user.remove()
    });
}

let showUser = (names, key) => {
    let user = document.querySelector('.u-' + key) 
    if (user) {
        user.classList.remove('hide')
    } else {
        let li = document.createElement('li')
        li.innerText = names[key] //+ '-' + key
        li.classList.add('u-' + key)
        userList.appendChild(li)
        /////////////////////////////////////////////
        getPeer().call(key, getMyStream())
        /////////////////////////////////////////////
        connectWith(key)
        /////////////////////////////////////////////
    }
}

let hideAllUSers = () => {
    let allUsers = document.querySelectorAll('.multiplayer-list li')
    allUsers.forEach(user => {
        user.classList.add('hide')
    });
}

let createUserList = () => {
    userList = document.querySelector('.multiplayer-list')
    if (userList) {
        return userList
    }
    userList = document.createElement('ul')
    userList.classList.add('multiplayer-list')
    document.body.appendChild(userList)
    return userList
}
export default populate


