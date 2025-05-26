// js
// react
import { useRef, useEffect } from "react";
// third
import { useDispatch, useSelector } from "react-redux";
// own
import { useForm } from "../../../../../core/hooks/useForm";
import { activateCategoriesProduct, updateCategoriesProduct } from "../../../actions/categories_product";

export const ModalCategoriesProductEdit = () => {
    const dispatch = useDispatch();
    const {categories_product} = useSelector(state => state.products);
    const [formValues, handleInputChange, reset] = useForm(categories_product);

    const id = useRef(categories_product.id);

    const {description} = formValues;

    useEffect(() => {
        if (categories_product.id !== id.current) {
            reset(categories_product);
            id.current = categories_product.id;
        }
    }, [categories_product, reset]);

    useEffect(() => {
        dispatch(activateCategoriesProduct(formValues));
    }, [formValues, dispatch]);

    const handleCreate = event => {
        event.preventDefault();
        dispatch(updateCategoriesProduct(formValues));
    }

    return (
        <>
            <form onSubmit={ handleCreate }>
                <div className="modals-default-cl">
                    <div className="modal fade" id="modalCategoryEdition" role="dialog">
                        <div className="modal-dialog modals-default">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <h2>Edicion de Categoria { categories_product.description }</h2>
                                    <p>Ingrese la nueva informacion de la Categoria del Producto.</p>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-lg-2 col-md-3 col-sm-3 col-xs-12">
                                                <label className="hrzn-fm">Nombre de la Categoria</label>
                                            </div>
                                            <div className="col-lg-8 col-md-7 col-sm-7 col-xs-12">
                                                <div className="nk-int-st">
                                                    <input 
                                                        type="text" 
                                                        name = "description" 
                                                        className="form-control input-sm" 
                                                        placeholder="Ingrese el nombre de la Categoria"
                                                        onChange={ handleInputChange }
                                                        value = { description }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary" 
                                    >
                                        Guardar
                                    </button>
                                    <button 
                                        type="button" 
                                        className="btn btn-danger" 
                                        data-dismiss="modal"
                                    >
                                        Cancelar
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