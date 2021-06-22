import UserService from "../../adapters/UserService"

const UserSession = {
    user: async userSession => {
        console.log('user session information', userSession);
        return await UserService.fetchUser(userSession.userId)
    }
}

export default UserSession;