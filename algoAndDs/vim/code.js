import { adminDashboardDao } from "./dao";



/**
 * @author Shailesh Sahu
 * @description handle the price the controller !!
 */
class AdminDashboardController {
async getCustomerActivies(payload: any) {
        return await adminDashboardDao.getCustomerActivies(payload);
    }

    async getOrderActivities(payload: any) {
        return await adminDashboardDao.getOrderActivities(payload);
    }

    async processors() {
        return await adminDashboardDao.processors();
    }
    
    async amounts(payload: any) {
        return await adminDashboardDao.amounts(payload);
    }

}


export const adminDashboardController: any = new AdminDashboardController();

