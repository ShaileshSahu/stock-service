import express from 'express';
import CoronaValidator from './corona.validator';
import {
    fork
} from 'child_process';
import {
    CoronaController
} from './corona.controller';
import {
    validator,
    success,
    error
} from '@src/helpers';
import {
    CONSTANT
} from '@src/constant/main.constant';

import path from 'path';
const router = express.Router();

router.get('/content', function (req, res) {
    const coronaFile = path.resolve(__dirname, '../../../views/index.html');
    return res.sendFile(coronaFile);
});


router.get('/videos', async (req, res) => {
    try {
        return await CoronaController.streamVideo(req, res);
    } catch (err) {
        console.log(`error of the video streaming`, err);
        error(err, res);
    }
});
router.get('/', validator(CoronaValidator.list, CONSTANT.REQ_TYPE.QUERY), async (req, res, next) => {
    try {
        console.log('here I am into system');
        const result = await CoronaController.list(req.query);
        return success(result, res);
    } catch (e) {
        return error(e, res);
    }
});

router.get('/primeGenerator', async (req, res) => {
    try {
        const {
            number
        } = req.query;
        const childProcess = fork(path.resolve(__dirname + '/child_corona.child.js'));
        childProcess.send({
            number: parseInt(number)
        });
        childProcess.on('message', message => {
            console.log('hi I am done with calculation part', message);
            return success({
                data: message
            }, res);
        });
    } catch (e) {
        return error(e, res);
    }
});

const CoronaRouter = router;
export default CoronaRouter;