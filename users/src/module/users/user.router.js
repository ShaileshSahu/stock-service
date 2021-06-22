import express from 'express';
import {
    Users,
    UserSessions
} from '../../../database/models';
import {
    addHours
} from 'date-fns';
const router = express.Router();
import mongoose from 'mongoose';
import {
    v4
} from 'uuid';
import {
    hasPassword,
    comparePasswordHash
} from '../../helper';
const USER_SESSION_EXPIRY_HOURS = 1;
router.get('/', async (req, res) => {
    try {
        const users = await Users.find();
        return res.status(200).json(users);
    } catch (error) {
        console.log('errro in user listing', error);
        return res.status(500).json({
            message: 'Users get api giving the error'
        })
    }
});

router.post('/', async (req, res) => {
    try {
        const {
            email,
            password,
            userName
        } = req.body;
        console.log('user data are coming from the system', req.body);
        const userPayload = Object.assign({},
            email && {
                email
            },
            password && {
                password: hasPassword(password)
            },
            userName && {
                userName
            },
            {
                _id: mongoose.Types.ObjectId()
            }
        );

        const user = await Users.create(userPayload);
        return res.status(200).json(user);
    } catch (error) {
        console.log('error', error);
        return res.status(200).json({
            message: 'Users creating the giving the error'
        });
    }
});

router.post('/session', async (req, res, next) => {
    try {
        if (!req.body.email || !req.body.password) {
            return next(new Error('Invalid body !'));
        }
        const user = await Users.findOne({
            email: req.body.email
        });
        if (!user) return next(new Error(`User doesn't exist!!`));
        console.log('user detail', user);
        if (!comparePasswordHash(req.body.password, user.password)) {
            return next(new Error('Invalid Creds!!'));
        };

        const expireAt = addHours(new Date(), USER_SESSION_EXPIRY_HOURS)
        const uuidv4 = v4();
        console.log('object id', mongoose.Types.ObjectId());
        const session = await UserSessions.create({
            userId: user.id,
            _id: mongoose.Types.ObjectId(),
            expireAt,
            uuid: uuidv4
        });
        return res.status(200).json(session);
    } catch (e) {
        return next(e);
    }
});

router.get('/:userId', async (req,res) => {
    try {
        const user = await Users.findOne({
            _id: req.params.userId
        });
        return res.status(200).json(user);
    } catch (e) {
        return next(e);
    }

});
router.get('/session/:sessionId', async (req, res) => {
    try {
        const userSession = await UserSessions.findOne({
            uuid: req.params.sessionId
        });
        return res.status(200).json(userSession);
    } catch (e) {
        return next(e);
    }
   
});

router.delete("/logout/:sessionId", async (req, res,next) => {
    try {
       
        const logout = await UserSessions.deleteOne({uuid: req.params.sessionId});
            return res.status(200).json({logout:true});
    } catch (e) {
        console.log('-- error',  e);
        return next(e);
    }
})


export const UserRouter = router;