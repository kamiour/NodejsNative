const eventEmitter = require('events');
const emitter = new eventEmitter;

// emitter.on('anything', data => {
//     console.log('on ANYTHING', data);
// })

// emitter.emit('anything', {name: 'Name1'});
// emitter.emit('anything', {name: 'Name2'});
// setTimeout(() => {
//     emitter.emit('anything', {name: 'Name3'});
// }, 1000)

class Dispatcher extends eventEmitter {
    subscribe(eventName, cb) {
        console.log('[Subscribe...]');
        this.on(eventName, cb);
    }

    dispatch(eventName, data) {
        console.log('[Dispatching...]');
        this.emit(eventName, data);
    }
}

let dis = new Dispatcher();
dis.subscribe('aa', (data) => {
    console.log('on aa: ', data);
})
dis.dispatch('aa', {aa: 22});