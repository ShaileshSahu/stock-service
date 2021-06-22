import express from 'express';
const router = express.Router();
import {UserRouter} from './users/user.router.js';

// router.use('/users', UserRouter);
router.get('/', async (req,res) => {
    return res.status(200);
})

export const BaseRouter = router;