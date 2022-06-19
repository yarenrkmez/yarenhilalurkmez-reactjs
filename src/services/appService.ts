import AppFetch from "./api";
import { ICategory, IProduct } from './responses';

export default class AppService {
    public static getCategories(): Promise<Array<ICategory>> {
        return AppFetch.request({
            endpoint: 'categories/'
        });
    };

    public static getProducts(): Promise<Array<IProduct>> {
        return AppFetch.request({
            endpoint: 'products/'
        });
    }


}
