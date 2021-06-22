require('module-alias/register');
import * as db from '../database/database.connection';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {
    baseRoute
} from '@modules/index.router.js';
// import compression from 'compression';
const dbURI = process.env.DB_URI;
const port = process.env.PORT;
const app = express();

app.use(bodyParser.json());
import {
    PreIntialize
} from '@src/helpers';
app.use(cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true
}));

// app.use(compression(
//     /* {
//         threshold: 10 * 1000,
//         level: 9, // default value is 6,
//         filter: ((req, re) => {
//             if (req) {
//                 return compression.filter(req, res)
//             }

//         })()
//     } */
// ))

// bootup
(async function () {
    try {
        await db.mongodbConnect(dbURI);
        new PreIntialize();
        console.log('----boootup done---');
    } catch (e) {
        console.log('--- error in pre boot ---', e);
    }
})();

app.use(function logger(req, res, next) {
    console.log('--- Listing Api server is hitted ---');
    console.log('-- time --', new Date());
    console.log('-- Request --', req.url);
    res.locals.apiHittedTime = Date.now();
    next();
});

app.use('/v1', baseRoute);

app.listen(port, "0.0.0.0 ", () => {
    // console.log('----------- d', d);
    console.log(`Listing port at ${port} At LISTING SERVER`);
});