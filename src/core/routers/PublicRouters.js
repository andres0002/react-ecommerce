// js
// react
// third
import PropTypes from "prop-types"
import { Navigate } from "react-router-dom"
// own

export const PublicRouters = ({
    isAuthenticated,
    children
}) => {
    return !isAuthenticated ? children : <Navigate to="/dashboard"/>
}

PublicRouters.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
}
