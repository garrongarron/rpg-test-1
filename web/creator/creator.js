import Props from './Props.js'

let runFunction = (parameters) => {
    if (parameters[0] instanceof Function) {
        parameters[0] = parameters[0]()
    }
    return parameters
}

let runProps = (parameters) => {
    if (parameters[0] instanceof Props) {
        parameters[0] = parameters[0].get()
    }
    return parameters
}

let createElement = (parameters) => {
    if (typeof parameters[0] === 'string') {
        parameters[0] = document.createElement(parameters[0]);
    }
    return parameters
}

let getNodeFinalle = (parameters) => {
    if (parameters[0].nodeType) {
        return parameters
    }
    throw 'Tag is not string or nodeElement', parameters
}

let appendChild = (parameters) => {
    if (parameters[1] && parameters[1].nodeType) {
        parameters[0].appendChild(parameters[1])
    }
    return parameters
}

let getNodeFromProps = (parameters) => {
    if (parameters[1] instanceof Props) {
        parameters[0].appendChild(parameters[1].get())
    }
    return parameters
}

let splitArrayNodes = (parameters) => {
    if (Array.isArray(parameters[1]) && parameters[1].every(n => n instanceof Node)) {
        parameters[1].map(node => parameters[0].appendChild(node))
    }
    if (Array.isArray(parameters[1]) && parameters[1].every(node => node instanceof Props)) {
        parameters[1].map(node => el.appendChild(node.get()))
    }
    return parameters
}

let innerText = (parameters) => {
    if (typeof parameters[1] === 'string') {
        parameters[0].innerText = parameters[1]
    }
    return parameters
}

let setAttribute = (parameters) => {
    if (typeof parameters[2] === 'object') {
        for (const key in parameters[2]) {
            parameters[0].setAttribute(key, parameters[2][key])//todo missing validation
        }
    }
    return parameters
}

let callback = (parameters) => {
    if (typeof parameters[2] === 'function') {
        parameters[2](parameters[0])
    }
    return parameters
}

let func = [
    runFunction,
    runProps,
    createElement,
    getNodeFinalle,
    appendChild,
    getNodeFromProps,
    splitArrayNodes,
    innerText,
    setAttribute,
    callback
]

export let creator = function () {
    return func.reduce(
        (val, func) => func(val),
        [arguments[0], arguments[1], arguments[2]]
    )[0];
};
export default creator