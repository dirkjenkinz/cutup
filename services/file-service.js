const fs = require('fs');
const path = require('path');

const getFile = (file) => {
    const directoryPath = path.join(__dirname, '../data');
    return new Promise((resolve, reject) => {
        fs.readFile(`${directoryPath}/${file}`, 'utf8',
            (err, data) => {
                if (err) {
                    console.log('error=', err);
                    reject(err);
                } else {
                    resolve(data);
                }
            })
    })
};

const writeFile = (data, file) => {
    console.log({file});
    const directoryPath = path.join(__dirname, '../output');
    return new Promise((resolve, reject) => {
        fs.writeFile(`${directoryPath}/${file}`, data, (err, msg) => {
            if (err) {
                console.log('error=', err);
                reject(err);
            } else {
                console.log('OK');
                resolve('ok');
            }
        })
    })
};

module.exports = {
    getFile,
    writeFile,
};
