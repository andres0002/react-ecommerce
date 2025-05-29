// js
// react
// third
import { useDispatch } from "react-redux";
// own
import { activateCategoriesProduct } from "../../../../redux/categories_product/actions";
import { ModalCategoriesProductEdit } from "../ModalCategoriesProductEdit";
import { ModalCategoriesProductDelete } from "../ModalCategoriesProdcutDelete";

export const CategoriesProductTable = ({title, optionalText, columns, rows}) => {
    const dispatch = useDispatch();

    return (
        <>
            <ModalCategoriesProductEdit />
            <ModalCategoriesProductDelete />

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="normal-table-list">
                    <div className="basic-tb-hd">
                        <h2>{ title }</h2> 
                        <p>{ optionalText }</p>
                    </div>
                    <div className="bsc-tbl">
                    {       
                        rows &&                 
                        <table className="table table-sc-ex">
                                <thead>
                                    <tr>
                                        {
                                            columns.map((column) =>
                                                <th>{ column }</th>
                                            )
                                        }
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        rows.map((item) => (
                                            <tr key={ item.id }>
                                                <td>{ item.id }</td>
                                                <td>{ item.description }</td>
                                                <td>
                                                    <button 
                                                        className="btn btn-primary"
                                                        data-toggle="modal" 
                                                        data-target="#modalCategoryEdition"
                                                        onClick={ () => dispatch( activateCategoriesProduct(item) ) }
                                                    >
                                                        EDITAR
                                                    </button>
                                                    <button 
                                                        className="btn btn-danger"
                                                        data-toggle="modal" 
                                                        data-target="#modalDeleteCategory"
                                                        onClick={ () => dispatch( activateCategoriesProduct(item) ) }
                                                    >
                                                        ELIMINAR
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

