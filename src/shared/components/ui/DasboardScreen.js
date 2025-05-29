// js
// react
// third
import { useSelector } from "react-redux"
import { Routes, Route } from "react-router-dom"
// own
import { Header } from "./Header"
import { NavBar } from "./NavBar"
import { NavBarMobile } from "./NavBarMobile"
import { PrivateRouters } from "../../../core/routers/PrivateRouters"
import { CategoriesProductScreen } from "../../../features/product/components/categories_product/CategoriesProductScreen"
import { Footer } from "./Footer"

export const DasboardScreen = () => {
    const {token} = useSelector(state => state.auth);

    return (
        <>
            <Header />
            <NavBar />
            <NavBarMobile />
            
            <div className="notika-status-area">
                <div className="container">
                    <div className="row">
                        <div>
                            <Routes>
                                <Route exact path="/products"></Route>
                                <Route
                                    exact path="/products/category-products"
                                    element = {
                                        <PrivateRouters isAuthenticated = { !!token }
                                            children = { <CategoriesProductScreen/> } 
                                        />   
                                    }
                                />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div> 
            
            <Footer />
        </>
    )
}