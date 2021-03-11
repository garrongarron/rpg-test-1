import basicContainer from './modules/BasicContainer.js'
import queue from './modules/Queue.js'

let start = () =>{
    basicContainer.show('Tutor', "Click to move around", 'E')
    setTimeout(() => {
        // basicContainer.hide()
    }, 3*1000);


    setTimeout(() => {
        queue.triggerMessage('Enjoy!', "3")
    }, 1000);
    
    setTimeout(() => {
        queue.triggerMessage('How are you?', "2")
    }, 2000);
    setTimeout(() => {
        queue.triggerMessage('Hello!', "1")
    }, 3000);
    
}
export default start


