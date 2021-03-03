

let setId = (uuid) => {
    let id = document.createElement('div')
    id.innerText = 'No ID loaded'
    let idContainer = document.createElement('div')
    idContainer.classList.add('ui-idContainer')
    idContainer.appendChild(id)
    document.body.appendChild(idContainer)
    id.innerText = uuid
}

export default setId