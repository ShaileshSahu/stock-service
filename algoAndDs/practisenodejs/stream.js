const fs = require('fs');
const stream = require('stream');
const promisify = require('util').promisify;
const sleep = promisify(setTimeout)
const http = require('http');
const server = http.createServer((req, res) => {
    req.setEncoding('utf8');
});
const zlib = require('zlib');
// this normal request by system 
// server.on('request', (req, res) => {
//     fs.readFile('./comma-separated-values-file-1.csv', function (error, data) {
//         res.end(data);
//     });
// });

// server.on('request', (req, res) => {
//     src = fs.createReadStream('comma-separated-values-file-1.csv', {
//         highWaterMark: 10
//     });
//     function transform(chunk) {

//     }
//     src.pipe(tranform,fs.createWriteStream('comma-separated-values-file-2.csv'));
// });


// server.listen(8000);
// here I am creating the chunking of the data based on loop
async function* generator() {
    await sleep(1000);
    yield 'hello';
    await sleep(2000);
    yield 'hello world';
    await sleep(3000);
    yield 'my love';
}



// console.log(generator());
// (async function () {

//     const readStream = fs.createReadStream('comma-separated-values-file-1.csv',
//         /* {
//                highWaterMark: 10000
//            } */
//     );
//     const rs = stream.Readable.from(generator());
//     rs.setEncoding('utf8');
//     rs.push('hello w');
//     for await (let chunk of readStream) {
//         // console.log('chunk of the data', chunk.toString());
//     }

//     readStream.on('end', function () {
//         console.log('read stream is finished');
//     });
// })();

(async function () {

})();


// this is the pause way of reading file 
const readStream = fs.createReadStream('comma-separated-values-file-1.csv', {
    highWaterMark: 10
});

// readStream.pause() // readStream.resumed()
// let chunk = '';
// readStream.on('readable', function () {
//     if (!chunk)
//         chunk = readStream.read().toString();
//     console.log('data', chunk);
// });

// readStream.on('error', function (error) {});
// stream.pipeline(fs.createReadStream('comma-separated-values-file-1.csv'), zlib.createGzip(), fs.createWriteStream('comma-separated-values-file-2.csv.gz'), (err) => {
//     console.log('error is created', err);
// });


// pipe is kind of attachment for next stream 

// let count = 0;
// const readStreamTs = new stream.Readable({
//     read(size) {
//         this.push(`data is ${count}`);
//         if (count === 5) this.push(null);
//         count++;
//     }
// });
// console.log('prcess information of stdout', process.stdout);
// readStreamTs.pipe(process.stdout);
// readStreamTs.on('data', (data) => {
//     console.log('data', data.toString());
// });

// readStreamTs.on('error', () => {
//     console.log('it been enerrorded');
// })

// readStreamTs.on('close', () => {
//     console.log('it being close');
// });
// readStreamTs.on('finish', () => {
//     console.log('it is done');
// });


const writableStream = new stream.Writable();
const readableStream = new stream.Readable({
    read(size) {
        this.push('dadsa');
        this.push(null);
    }
});
writableStream._write = (chunk, encoding, next) => {
    console.log('value which required', chunk);
}
readableStream.pipe(writableStream);
readableStream.push('hello world');
readableStream.push('last ride');


writableStream.end();