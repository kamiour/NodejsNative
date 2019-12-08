const os = require('os');

console.log('OS', os.platform());
console.log('Архитектура процессора', os.arch());
console.log('Процессоры', os.cpus());
console.log('Свободная память', os.freemem());
console.log('Общая память', os.totalmem());
console.log('Homedir', os.homedir());
console.log('Включен', os.uptime());