import Navigation from "components/Navigation/Navigation"
import UserMenu from "components/UserMenu/UserMenu"
import { useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import { selectedIsLoadingUser } from "redux/auth/auth.selectors"

import { HeaderCont } from "./Header.styled"
const getActiveLink = ({isActive}) => {
    return isActive ? 'active link_Logo' : 'link_Logo';
    
}
const getActiveMy = ({isActive}) => {
    return isActive ? 'active link_My' : 'link_My';
    
}
const Header = () => {
    const isLoading = useSelector(selectedIsLoadingUser)
    
    console.log(isLoading, 'ggggggg')
    return (
        <>
        <HeaderCont>
            {!isLoading ? <NavLink className={getActiveLink}  to=''>Home</NavLink> : <NavLink className={getActiveLink} to='/phonebook'>MyContacts</NavLink>}
        
            {isLoading ? <UserMenu /> : <Navigation />}
        </HeaderCont>
        </>
    )
}

export default Header