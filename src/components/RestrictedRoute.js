import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectedIsLoadingUser } from '../redux/auth/auth.selectors.js'
export const RestrictedRoute = ({component: Component, redirectTo = '/'}) => {
    const isLoggeIn = useSelector(selectedIsLoadingUser)
    
    return isLoggeIn ? <Navigate to={redirectTo} /> : <Component/>
}