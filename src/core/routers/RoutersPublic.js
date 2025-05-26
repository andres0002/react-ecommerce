// js
// react
// third
import PropTypes from "prop-types"
import { Navigate } from "react-router-dom"
// own

export const RoutersPublic = ({
    isAuthenticated,
    children
}) => {
    return !isAuthenticated ? children : <Navigate to="/dashboard"/>
}

RoutersPublic.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
}
