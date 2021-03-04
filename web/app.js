import router from './router/Router.js'
import cssLoader from './tools/CssLoader.js'
import landingPage from './pages/Landing.js'
import streamer from './pages/Streamer.js'
import howToPlay from './pages/WhoToPlay.js'

router.setRoutes({
    '/': landingPage,
    '/The-Game': landingPage,
    '/Streaming': streamer,
    '/How-to-play': howToPlay,
})
router.linkTo('/')




let sectionStyle = `
section, ul{
    width: 1100px; margin: 0 auto
}
section{
    padding: 0 .25em
}
@media (max-width: 1100px) { 
    ul{flex-flow: column} 
}`
cssLoader.set(sectionStyle)