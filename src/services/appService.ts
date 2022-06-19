import AppFetch from "./api";
import { ICategory } from "./responses";

export default class AppService {
    public static getCategories(): Promise<Array<ICategory>> {
        return AppFetch.request({
            endpoint: 'categories/'
        });
    }


}
