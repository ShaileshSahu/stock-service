// Today we are going to learn stream and their effects as well as  how to handle them !!!!
const streamProcess = require('stream')
// normal way to read files
const fs = require('fs');
fs.readFile('comma-separated-values-file-1.csv', function (error, data) {
    console.log('read the file', data.toString().length);
});
// So basically it will only read whole chunk at a time which make I/O blocking and process become intensive
// but we have solution for this
// STREAM
// -- breaking 
const stream = fs.createReadStream('comma-separated-values-file-1.csv');

// we do have choice it can be done via event based as well as iterator loop!!
let chunk = '';
stream.on('data', function (data) {
    chunk += data.toString();
    if (chunk) {
        stream.pause();
        stream.emit('finish');
    }

});

stream.on('finish', function () {
    if (stream.isPaused()) {
        console.log('why stream has been paushed');
        stream.resume();
    }
});

stream.on('close', function () {
    console.log('close reason', chunk.length);
});

streamProcess.pipeline(fs.createReadStream('comma-separated-values-file-1.csv'), fs.createWriteStream('firstlevel.csv'), function (error, data) {
    if (error == null) {
        console.log('process completed successfully');
    }
});