// js
// react
// third
import PropTypes from "prop-types"
import { Navigate } from "react-router-dom"
// own

export const RoutersPrivate = ({
    isAuthenticated,
    children
}) => {
    return isAuthenticated ? children : <Navigate to="/auth/login"/>;
}

RoutersPrivate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
}