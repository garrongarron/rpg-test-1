import router from './router/Router.js'
import cssLoader from './tools/CssLoader.js'
import landingPage from './pages/Landing.js'
import streamer from './pages/Streamer.js'
import feedbackPage from './pages/Feedback.js'
import howToPlay from './pages/WhoToPlay.js'


router.setRoutes({
    '/': landingPage,
    '/The-Game': landingPage,
    '/Streaming': streamer,
    '/Feedback': feedbackPage,
    '/How-to-play': howToPlay,
})
document.fonts.ready.then(()=>{
    router.linkTo('/')
})





let sectionStyle = `
.web-container section, .web-container  ul{
    padding: 0 2vw ;
}
/*
.web-container section, .web-container  ul{
    width: 1100px; margin: 0 auto
}

.web-container section{
    padding: 0 .25em
}

@media (max-width: 1100px) { 
    .web-container  ul{flex-flow: column} 
}
*/`
cssLoader.set(sectionStyle)