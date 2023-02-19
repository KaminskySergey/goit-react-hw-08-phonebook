import Box from "components/Box/Box";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "redux/auth/auth.operations";
import { selectedUser } from "redux/auth/auth.selectors";

const getActiveNav= ({isActive}) => {
    return isActive ? 'activeNav link_Nav' : 'link_Nav';
    
}
const UserMenu = () => {
    const user = useSelector(selectedUser)
    const dispatch = useDispatch()
    const hangleLogOut = () => {
        dispatch(logOut(user.token))
    }
    
    return (
        <>
        <Box ml='auto'>
        <p style={{color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Welcome, {user.user.name}</p>
        <NavLink className={getActiveNav} style={{marginLeft: '16px'}} type="button" onClick={hangleLogOut}>Logout</NavLink>
        </Box>
        </>
    )
}

export default UserMenu;