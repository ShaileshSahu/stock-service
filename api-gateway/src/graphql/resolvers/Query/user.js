import UserService from './../../../adapters/UserService';
const userListingResolver = async () => {
    return await UserService.fetchUsers();
}

export default userListingResolver;