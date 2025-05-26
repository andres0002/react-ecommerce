// js
// react
import { useEffect } from "react";
// third
import { useDispatch, useSelector } from "react-redux";
// own
import { types } from "../../../../core/types";
import { CategoriesProductTable } from "../ui/categories_product/utils/CategoriesProductTable";
import { BreadcombCategoriesProduct } from "../ui/categories_product/BreadcombCategoriesProduct";
import { ModalCategoriesProductEdit } from "../ui/categories_product/ModalCategoriesProductEdit";
import { loadCategoriesProduct } from "../../helpers/categories_product/loadCategoriesProduct";

export const CategoriesProductScreen = () => {
    var style = {}
    style.display = 'none';

    const dispatch = useDispatch();

    useEffect(() => {
        async function loadedCategories() {
            const categories_product = await loadCategoriesProduct();
            dispatch(eventLoaded(categories_product));
        }
        loadedCategories();
    }, [dispatch]);

    const {rows} = useSelector(state => state.products);

    const columns = ['ID', 'Description'];

    return (
        <>            
            <BreadcombCategoriesProduct />

            <button 
                id="buttonUpdate"
                data-toggle="modal" 
                data-target="#modalCategoryEdition" 
                type="button" 
                className="btn btn-primary"
                style={ style }
            >
                
            </button>  

            <button 
                id="buttonDelete"
                data-toggle="modal" 
                data-target="#modalDeleteCategory" 
                type="button" 
                className="btn btn-primary"
                style={ style }
            >
                
            </button>  

            <CategoriesProductTable
                title="Listado de Categorias de Productos"
                optionalText=""
                columns={ columns }
                rows={ rows }
            />

            <ModalCategoriesProductEdit />
        </>
    )
}

export const eventLoaded = categories_product => ({
    type: types.eventLoaded,
    payload: categories_product
});