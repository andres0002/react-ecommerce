// js
// react
import { useEffect } from "react";
// third
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// own
import { LoginScreen } from "../../features/auth/components/LoginScreen";
import { RegisterScreen } from "../../features/auth/components/RegisterScreen";
import { ForgotPasswordScreen } from "../../features/auth/components/ForgotPasswordScreen";
import { DasboardScreen } from "../../shared/components/ui/DasboardScreen";
import { startChecking } from "../../features/auth/actions/auth";
import { RoutersPublic } from "./RoutersPublic";
import { RoutersPrivate } from "./RoutersPrivate";
import { NoFoundScreen } from "../../shared/components/ui/NoFoundScreen";

export const RoutersApp = () => {
    const dispatch = useDispatch();
    const {token} = useSelector(state => state.auth);

    useEffect(() => {
        // Aquí creamos una función async dentro del useEffect
        const checkAuth = async () => {
            await dispatch(startChecking());
        };
        checkAuth();
    }, [dispatch]);

    return (
        <Router>
            <div>        
                <Routes>
                    <Route
                        exact path="/auth/login"
                        element = {
                            <RoutersPublic isAuthenticated = { !!token }>
                                <LoginScreen/>
                            </RoutersPublic>
                        }
                    />
                    <Route exact path="/auth/register" element = { <RegisterScreen/> } />
                    <Route exact path="/auth/forgot-password" element = { <ForgotPasswordScreen/> } />
                    <Route exact path="/no-found" element = { <NoFoundScreen/> } />
                    <Route
                        exact path="/dashboard"
                        element = {
                            <RoutersPrivate isAuthenticated = { !!token }>
                                <DasboardScreen/>
                            </RoutersPrivate>
                        }
                    />
                    <Route
                        exact path="/products/category-products"
                        element = {
                            <RoutersPrivate isAuthenticated = { !!token }
                                children = { <DasboardScreen/> } 
                                
                            /> 
                        }
                    />
                    <Route
                        exact path="*"
                        element = {
                            <Navigate to="/no-found" />
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}