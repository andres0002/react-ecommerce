// js
// react
import { useRef, useEffect } from "react";
// third
import { useDispatch, useSelector } from "react-redux";
// own
import { useForm } from "../../../../../core/hooks/useForm";
import { deleteCategoriesProduct } from "../../../actions/categories_product";

export const ModalCategoriesProductDelete = () => {
    const dispatch = useDispatch();
    const {categories_product} = useSelector(state => state.products);
    const [formValues, handleInputChange, reset] = useForm(categories_product);

    const id = useRef(categories_product.id);

    useEffect(() => {
        if (categories_product.id !== id.current) {
            reset(categories_product);
            id.current = categories_product.id;
        }
    }, [categories_product, reset]);

    const handleDelete = event => {
        event.preventDefault();
        dispatch(deleteCategoriesProduct(id));
    }

    return (
        <>
            <form onSubmit={ handleDelete }>
                <div className="modals-default-cl">
                    <div className="modal fade" id="modalDeleteCategory" role="dialog">
                        <div className="modal-dialog modals-default">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="">
                                    <h2>¿Desea eliminar la Categoria { categories_product.description }?</h2>
                                </div>
                                <div className="modal-footer">
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary" 
                                    >
                                        CONFIRMAR ELIMINACION
                                    </button>
                                    <button 
                                        type="button" 
                                        className="btn btn-danger" 
                                        data-dismiss="modal"
                                    >
                                        CANCELAR
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
