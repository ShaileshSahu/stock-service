import express from 'express';
const router = express.Router();
import { success, error } from  '@src/helpers';
import NewsController from './news.controller';

router.get('/', async (req,res) => {
    try {
        const result = await NewsController.fetchNews();
        return success(result,res);
    } catch(er) {
        return error(er, res);
    }

});

export default router;