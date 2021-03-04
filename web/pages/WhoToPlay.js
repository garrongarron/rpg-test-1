import Page from '../router/Page.js'
import _ from '../creator/creator.js'
import List from '../components/List.js'
import Navigator from '../components/Navigator.js'
import links from '../components/Links.js'
import begin from '../../src/UI/Landing.js'

let components = [
    new Navigator(new List(links)),
    _('section', [
        _('h1', 'How to play Warrior'),
        _('br'),
        _('strong', `Displacement`),
        _('p', `To move around the wolrd you can use ASDW key.`),
        _('br'),
        _('strong', `Atack`),
        _('p', `Press E key.`),
        _('br'),
        _('strong', `Sprint`),
        _('p', `Press Shift key.`),
        _('br'),
        _('strong', `Stealth mode`),
        _('p', `Press Space key.`),
        _('br'),
        _('strong', `Look Around`),
        _('p', `Horizontal mouse movement.`),
        _('br'),
        _('strong', `Camera Movement`),
        _('p', `Vertical mouse movement.`),

    ]),
]
let landing = document.createElement('div')
components.map(c => _(landing, c))

let playNowBtn = landing.querySelector('.nav>ul>li:last-of-type>a')
playNowBtn.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.web-container').classList.add('hide')
    begin()
})

let landingPage = new Page(landing)

export default landingPage
