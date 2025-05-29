// js
// react
// third
// own
import { notification } from "../../../../core/helpers/alert";
import { fetchWithToken } from "../../../../core/helpers/fetch";
import { types } from "../../../../core/types";
import { eventLoaded } from "../../components/categories_product/CategoriesProductScreen";
import { loadCategoriesProduct } from "../../helpers/categories_product/loadCategoriesProduct";

export const registerCategoriesProduct = ({description}) => {
    return async dispatch => {
        const response = await fetchWithToken(
            'product/categories_product',
            {description},
            'POST'
        );

        const body = await response.json();

        if (response.status === 201) {
            notification("SUCCESS", body.message, 'success');
        } else {
            notification("ERROR", body.error, 'error');
        }
    }
}

export const updateCategoriesProduct = formValues => {
    return async dispatch => {
        const response = await fetchWithToken(
            `product/categories_product/${formValues.id}/`,
            {
                'description': formValues.description
            },
            'PUT'
        );

        const body = await response.json();

        if (response.status === 200) {
            dispatch(eventLoaded(await loadCategoriesProduct()));
            document.getElementById("btnUpdate").click();
            notification("SUCCESS", body.message, 'success');
        } else {
            notification("ERROR", body.error, 'error');
        }
    }
}

export const deleteCategoriesProduct = id => {
    return async dispatch => {
        const response = await fetchWithToken(
            `product/categories_product/${id}/`,
            {},
            'DELETE'
        );

        const body = response.json();

        if (response.status === 204) {
            dispatch(eventLoaded(await loadCategoriesProduct()));
            document.getElementById("btnDelete").click();
            notification("SUCCESS", body.message, 'success');
        } else {
            notification("ERROR", body.error, 'error');
        }
    }
}

export const activateCategoriesProduct = categories_product => ({
    type: types.activateCategoriesProduct,
    payload: categories_product
})