import Page from '../router/Page.js'
import _ from '../creator/creator.js'
import List from '../components/List.js'
import Navigator from '../components/Navigator.js'
import links from '../components/Links.js'
import begin from '../../src/UI/Landing.js'

let components = [
    new Navigator(new List(links)),
    _('section', [
        _('h1', 'Warrior on stream'),
        _('br'),
        _('br'),
        _('b', `Music`),
        _('p', `The music in the game is amazing and free of copy right.`),
        _('br'),
        _('b', `Integrated voice chat`),
        _('p', `There is an integrated voice chat into tthe game.`),
        _('br'),
        _('b', `Secure data`),
        _('p', `There is no sensitive data shown on screen.`),

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
