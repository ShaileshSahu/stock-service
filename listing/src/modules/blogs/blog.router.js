import express from 'express';
const router = express.Router();
import {
    success,
    error,
    validator
} from '@src/helpers';
import {
    CONSTANT
} from '@src/constant/main.constant';
import BlogController from './blog.controller';
import BlogValidatorSchema from './blog.validator';

router.get('/', async (req, res) => {
    try {
        const result = await BlogController.blogs();
        console.log('data', result);
        return success(result, res);
    } catch (e) {
        return error(e, res);
    }
});

router.post('/', validator(BlogValidatorSchema.create, CONSTANT.REQ_TYPE.BODY), async (req, res) => {
    try {
        console.log('data coming into the system');
        const {
            body
        } = req;
        const result = await BlogController.createBlog(body);
        console.log('result', result);
        return success(result, res);
    } catch (e) {
        return error(e, res);
    }
});

router.get('/:id', validator(BlogValidatorSchema.detail, CONSTANT.REQ_TYPE.PARAMS), async (req, res) => {
    try {
        const result = await BlogController.blog(req.params.id);
        return success(result, res);
    } catch (e) {
        return error(e, res);
    }
});


router.patch('/:id', validator(BlogValidatorSchema.updateStatus, CONSTANT.REQ_TYPE.BODY), async (req, res) => {
    try {
        const result = await BlogController.updateStatus({
            id: req.params.id,
            isActive: req.body.isActive
        });
        return success(result, res);
    } catch (e) {
        return error(e, res);
    }
});

router.put('/:id', validator(BlogValidatorSchema.updateBlog, CONSTANT.REQ_TYPE.BODY), async (req, res) => {
    try {
        const result = await BlogController.updateBlog({
            id: req.params.id,
            title: req.body.title,
            description: req.body.description
        });
        return success(result, res);
    } catch (e) {
        return error(e, res);
    }
});

const BlogRouter = router;
export default BlogRouter;