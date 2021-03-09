import Page from '../router/Page.js'
import _ from '../creator/creator.js'
import List from '../components/List.js'
import Navigator from '../components/Navigator.js'
import links from '../components/Links.js'
import begin from '../../src/UI/Landing.js'

let components = [
    new Navigator(new List(links)),
    _('section', [
        _('h1', 'Feedback'),
        _('br'),
        _('p', `You can leave a message or feedback on our discord server`),
        _('a', `Discord`, (node)=>{
            node.setAttribute('href', 'https://discord.gg/gm5pWWfc' )
            node.setAttribute('target', '_blank' )
        }),
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

let feedbackPage = new Page(landing)

export default feedbackPage
