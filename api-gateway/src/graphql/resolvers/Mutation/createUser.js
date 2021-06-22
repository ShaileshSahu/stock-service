import UserService from "../../../adapters/UserService";

const createUserResolver = async (obj, {email,password,userName}, context) => {
    console.log('user created api graph there', email, password, userName);
    const userCreated = await UserService.createUser({email, password, userName});
    return userCreated;
};

export default createUserResolver;