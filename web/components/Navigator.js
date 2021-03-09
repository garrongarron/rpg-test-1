import _ from '../creator/creator.js'
import Props from '../creator/Props.js'
import cssLoader from '../tools/CssLoader.js'

class Navigator extends Props { 
    render(links) {
        cssLoader.load('web/components/nav.css?'+(new Date().getTime()))
        return _(
            'nav',
            links,
            nav => nav.classList.add('nav')
        )
    }
}
export default Navigator