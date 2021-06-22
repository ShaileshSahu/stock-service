const USERS_SERVICE_URI = "http://users:8081"
import got from 'got';
export default class UserService {
    static async createUser({
        email,
        password,
        userName
    }) {
        const data = await got.post(USERS_SERVICE_URI + '/users', {
            json: {
                email,
                password,
                userName
            }
        }).json();
        return data;
    }

    static async fetchUsers() {
        const data = await got.get(USERS_SERVICE_URI + '/users').json();
        return data;
    }


    static async createUserSession({
        email,
        password
    }) {
        try {
            console.log('--- data ----')
            const data = await got.post(USERS_SERVICE_URI + '/users/session', {
                json: {
                    email,
                    password
                }
            }).json();
            return data;
        } catch (error) {
            console.log('error in creating user session', error);
        }
    }

    static async fetchUser(userId) {
        try {
            const data = await got.get(USERS_SERVICE_URI + `/users/${userId}`).json();
            return data;
        } catch(error) {
            console.log('---user session--', error);
        }
    }

    static async fetchUserSession(sessionId) {
        try {
            const data = await got.get(USERS_SERVICE_URI + `/users/session/${sessionId}`).json();
            return data;
        } catch(e) {
            console.log(e) 
            return {}
        }
    }

    static async deleteUserSession(sessionId) {
        try {
            const data = await got.delete(USERS_SERVICE_URI + `/users/logout/${sessionId}`).json();
            return data;
        } catch (e) {
            console.log('error during the delete of the usersession', e);
        }
    }

}