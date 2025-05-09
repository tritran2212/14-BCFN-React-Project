
import {axiosWithout} from './config';

export function getAllProductsAPI(){
        return axiosWithout("/api/Product")
}
 
export function getCategoryAPI(){
    return axiosWithout("api/Product/getAllCategory")
}
export function getProductDetailAPI(id){

    return axiosWithout(`
/api/Product/getbyid?id=${id}`)

}