import {
    CoronaService
} from '../../../adapters/CoronaService';
const CoronaResolver = async (obj, {
    limit,
    search
}, context) => {
    try {
        console.log('query parameters in query limit', limit);
        const result = await CoronaService.fetchCorona({
            limit,
            search
        });
        return result;
    } catch (error) {
        console.log('-- corona resolver fetch issue ---', error);
    }

};

export default CoronaResolver;