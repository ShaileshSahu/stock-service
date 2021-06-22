import UserService from '..//../../adapters/UserService';

const DeleteUserSessonResolver = async (obj, {sessionId}, context) => {
    console.log('is this part calling or not');
    context.res.clearCookie("userSessionId");
    const result = UserService.deleteUserSession(sessionId)
    return  result;
}

export default DeleteUserSessonResolver