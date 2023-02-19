import { Link, NavLink } from "react-router-dom";
import { List } from "./Navigation.styled";

const getActiveNav= ({isActive}) => {
    return isActive ? 'activeNav link_Nav' : 'link_Nav';
    
}
const Navigation = () => {
    return (
        <>
            <List>
                <li>
                    <NavLink className={getActiveNav} to='/register'>
                    Sign In
                    </NavLink>
                </li>
                <li>
                    <NavLink className={getActiveNav} to='/login'>
                    Log In
                    </NavLink>
                </li>
        </List>
        </>
    )
}

export default Navigation;