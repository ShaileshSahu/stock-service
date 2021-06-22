const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
app.get('/', function (req, res) {
    return res.sendFile(path.resolve(__dirname, "index.html"));
});

app.get('/videos', function (req, res) {

    try {

        const path = 'videostream.mp4'
        const stat = fs.statSync(path)
        const fileSize = stat.size
        const range = req.headers.range
        console.log(`default value of range is`, range);
        if (range) {
            console.log('range', range);

            const parts = range.replace(/bytes=/, "").split("-")
            const start = parseInt(parts[0], 10)
            const end = fileSize - 1;

            const chunksize = (end - start) + 1;

            const file = fs.createReadStream(path, {
                start,
                end,
                highWaterMark: 30
            });
            const head = {
                'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                'Accept-Ranges': 'bytes',
                'Content-Length': chunksize,
                'Content-Type': 'video/mp4',
            }

            res.writeHead(206, head)
            file.pipe(res)
        }
        /* else {
                   const head = {
                       'Content-Length': fileSize,
                       'Content-Type': 'video/mp4',
                   }
                   res.writeHead(200, head)
                   fs.createReadStream(path).pipe(res)
               } */
    } catch (error) {
        console.log('error coming in streaming', stream);
    }

});

app.listen(8000, function () {
    console.log('server is started on this video streaming port', 8000);
})