import express from 'express';
const router = express.Router();
import BlogRouter from './blogs/blog.router';
import CoronaRouter from './corona/corona.router';
import NewsRouter from './news/news.router';
import TodoRouter from './todo/todo.route';
router.use('/blogs', BlogRouter);
router.use('/news', NewsRouter);
router.use('/coronas', CoronaRouter);
router.use('/todos', TodoRouter);
export const baseRoute = router;