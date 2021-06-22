import UserService from '../../../adapters/UserService';

const userSessionResolver = async (object, {me}, context) => {
    console.log('data', context.res.locals.userSessionId);
    return UserService.fetchUserSession(context.res.locals.userSessionId)
}

export default userSessionResolver;