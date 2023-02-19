import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectedIsLoadingUser, selectedIsRefreshUser } from '../redux/auth/auth.selectors.js'
export const PrivateRoute = ({component: Component, redirectTo = '/'}) => {
    const isLoggeIn = useSelector(selectedIsLoadingUser)
    const isRefresh = useSelector(selectedIsRefreshUser)
    
    const isPrivate = !isLoggeIn && !isRefresh;
    
    return isPrivate ? <Navigate to={redirectTo} /> : <Component/>
}