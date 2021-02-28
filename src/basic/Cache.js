

let isChached = (string) => {
    return caches.has(string)

}
let setCache = (name, data) => {
    caches.open(name).then(cache => {
        cache.addAll([
            'index.html'
        ]).then(() => {
            cache.put('index.html', new Response(JSON.stringify(data)))
        })
        // cache.match('index.html').then(res => {
        //     res.text().then(str => {
        //         console.log(str)
        //     })
        // })
    })
}

let getCache = (name, callback) => {
    return caches.open(name).then(cache => {
        cache.match('index.html').then(res => {
            res.text().then(str => {
                callback(str)
            })
        })
    })
}
export default isChached
export { setCache, getCache }