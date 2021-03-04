import Page from '../router/Page.js'
import _ from '../creator/creator.js'
import List from '../components/List.js'
import Navigator from '../components/Navigator.js'
import links from '../components/Links.js'
import begin from '../../src/UI/Landing.js'

let components = [
    new Navigator(new List(links)),
    _('section', [
        _('h1', 'Warrior'),

        _('br'),
        _('p', `This is the 3d online rpg based on the adventure of the brave         warrior Samu in the wonderful land, where politicians still worry about         the people... no really.`),

        _('br'),
        _('b', `Ready to play.`),
        _('p', `No download needed. You can play just in the browser.`),
        _('p', `Once you are connected to the server you can speak with other characters into the game.`),

        _('br'),
        _('b', `Multiplayer and Single player.`),
        _('p', `You  can play in colavorative mode, been part of a team or in  competitive mode like Battle Royale.`),

        _('br'),
        _('b', `Single player.`),
        _('p', `Many missions will challenge you to achieve and find your best.`),

        _('br'),
        _('b', `Create you own Room.`),
        _('p', `You can create your own room and invite your friend to the adventure.`),
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
