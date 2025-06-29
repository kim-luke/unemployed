const {EventEmitter} = require('events');
const {readFile, readFileSync} = require('fs');

const eventEmitter = new EventEmitter();
const delayed_txt = readFileSync('hello2.txt', 'utf8');
const txt = readFile('hello.txt', 'utf8', (err, txt) => {
    console.log(txt)
});

eventEmitter.on('lunch', () => {
    console.log('yum!');
})

eventEmitter.emit('lunch');
eventEmitter.emit('lunch');

console.log(delayed_txt);
console.log(txt);