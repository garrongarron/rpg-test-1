import Page from './Page.js'

let lastPage = null

let dummyNode = document.createElement('div')
dummyNode.innerText = "Dummi Text"

let linkTo = (pathname) => {
    pathname = pathname.replace(/ /g, "-")
    // pathname = pathname.replace(' ', '-')
    // history.pushState({}, '', pathname)
    run(pathname)//go ahead
}

let routes = {
    '/index.html': new Page(dummyNode),
    '/contac.html': new Page(dummyNode),
    '/product.html': new Page(dummyNode),
}

let p_404 = document.createElement('div')
p_404.innerText = 'Page not found'
let page_404 = new Page(p_404)

let setRoutes = (routesObj) => {
    routes = routesObj
    routes['404'] = page_404
}

window.onpopstate = (e) => {
    run()//go back
}

let run = (pathname) => {
    console.log(pathname);
    if (routes[lastPage]) routes[lastPage].hide()
    console.log(routes[pathname], routes, pathname);
    if (routes[pathname]) {
        lastPage = pathname
        routes[pathname].show()
    } else if (routes['/' + pathname]) {
        routes['/' + pathname].show()
        lastPage = '/' + pathname
    } else {
        page_404.show()
        lastPage = '404'
        return
    }
    // lastPage = location.pathname

}

let router = {
    setRoutes,
    linkTo
}

export default router