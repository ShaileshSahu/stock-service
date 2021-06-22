import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from '../database/database.connection';
import {UserRouter} from './module/users/user.router';
const port = process.env.PORT;
const DB_URI = process.env.DB_URI;
const app = express();
db.mongodbConnect(DB_URI);

app.use(bodyParser.json());
app.use(cors());
// Middleware function for continously logging the process !!!
app.use(function(req,res,next) {
    console.log(' --- user service api is hitted -- ');
    console.log('--- Date  ---', new Date());
    console.log(' --- Req body ---', req.body);
    next();
});

app.use('/users', UserRouter);
// if something happened to be error!!
app.use(function(req,res,next) {
    
    return res.status(500).json({});
})
app.listen(port, '0.0.0.0', () => {
    console.log(`User server is starting ${port}`);
});

console.log('user service')