import UserService from '../../../adapters/UserService';

const userSessionResolver = async (obj, {
    email,
    password
}, context) => {
    try {
        console.log('information started');
        const userSession = await UserService.createUserSession({
            email,
            password
        });
        context.res.cookie("userSessionId", userSession.uuid, {
            httpOnly: true
        });
        return userSession;
    } catch (e) {
        console.log('-- eror --', e);
    }
}

export default userSessionResolver;