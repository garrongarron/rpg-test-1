import _ from '../creator/creator.js'
import Props from '../creator/Props.js'
import router from '../router/Router.js'

class List extends Props {
    render(a) {
        let list = _('ul', a.map(link => _('li',
            _('a', link, (e) => {
                _(e, null, { href: link }).addEventListener('click', (event) => {
                    router.linkTo(link)
                    event.preventDefault();
                    // return false;
                })
                // console.log(e);
            }))
        ));

        return list
    }
}
export default List