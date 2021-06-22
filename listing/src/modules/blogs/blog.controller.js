import {
    CONSTANT
} from '../../constant/main.constant';
import {
    Blogs
} from '../../../database/models/blog.model';
import {
    responseMerge
} from '@src/helpers';

class BlogController {

    static async blogs() {
        try {
            const lists = await Blogs.find({});
            return {
                ...CONSTANT.SUCCESS.LIST,
                ...{
                    data: lists
                }
            };
        } catch (error) {
            console.log('error', error);
            return CONSTANT.ERROR.GATEWAY_ERROR;
        }
    }


    static async createBlog(payload) {
        try {
            payload._id = mongoose.Types.ObjectId();
            console.log('my create first body', payload);
            await Blogs.create(payload);
            return {};
        } catch (error) {
            console.log('create error ??? ', error);
            return CONSTANT.ERROR.GATEWAY_ERROR;
        }
    }

    static async blog(id) {
        try {
            console.log('--- coming the payload ---', id);
            const detail = await Blogs.findById(id);
            console.log('detail of the blog', detail);
            return responseMerge(CONSTANT.SUCCESS.BLOG_DETAILS, {
                data: detail
            });
        } catch (e) {
            return CONSTANT.ERROR.GATEWAY_ERROR;
        }
    }

    static async updateStatus({
        id,
        isActive
    }) {
        try {
            console.log('--- coming the update sttus --', isActive);
            const data = await Blogs.findByIdAndUpdate(id, {
                isActive: isActive
            });
            console.log('information the data');
            return {};
        } catch (e) {
            console.log('errror', e);
            return CONSTANT.ERROR.GATEWAY_ERROR;
        }
    }

    static async updateBlog({
        id,
        title,
        description
    }) {
        try {
            const updateObject = Object.assign({}, title && {
                title
            }, description && {
                description
            });
            const data = await Blogs.findByIdAndUpdate(id, updateObject);
            console.log('-- udate blog ---', data);
        } catch (error) {
            console.log('error', error);
            return CONSTANT.ERROR.GATEWAY_ERROR;
        }
    }
}

export default BlogController;