//FS for filesystem
const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) {
//         throw err
//     };

//     console.log('Папка создана'); 
// });

const filepath = path.join(__dirname, 'test', 'text.txt');

fs.writeFile(filepath, 'Hello NodeJS', err => {
    if (err) throw err;
    console.log('Файл создан');
})

fs.appendFile(filepath, '\nHello 3', err => {
    if (err) throw err;
    console.log('Файл дополнен');
})

//writeFile переписыает существующий контент
//appendFile добавляет контент

fs.readFile(filepath, (err, content) => {
    if (err) throw err;

    const data = Buffer.from(content);
    console.log('Content:\n', data.toString());
})
