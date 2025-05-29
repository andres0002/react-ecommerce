// js
// react
// third
// own
import { fetchWithToken } from "../../../../core/helpers/fetch";

export const loadCategoriesProduct = async () => {
    const response = await fetchWithToken('product/categories_product/');
    const body = await response.json();
    
    let categories_product = {};
    
    categories_product.columns = ['ID', 'Name'];
    let data = [];

    body.forEach(category_product => {
        data.push({
            id: category_product.id,
            description: category_product.description
        })
    });

    categories_product.data = data;
    return categories_product;
}