// js
// react
// third
import PropTypes from "prop-types"
import { Navigate } from "react-router-dom"
// own

export const PrivateRouters = ({
    isAuthenticated,
    children
}) => {
    return isAuthenticated ? children : <Navigate to="/auth/login"/>;
}

PrivateRouters.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
}