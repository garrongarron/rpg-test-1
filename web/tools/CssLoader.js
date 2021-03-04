import _ from '../creator/creator.js'
class CssLoader {
    constructor() {
        this.head = document.getElementsByTagName('HEAD')[0];
    }

    load(url){
        var link = _('link', null, {
            rel:'stylesheet',
            type:'text/css',
            href:url,
        });
        _(this.head, link)
    }

    set(css){
        _(this.head, _("style", null, style => style.innerHTML = css))
    }
}
const cssLoader = new CssLoader()
export default cssLoader