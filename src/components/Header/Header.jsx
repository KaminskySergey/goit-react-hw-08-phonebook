import { Link } from "react-router-dom"
import { HeaderCont, List } from "./Header.styled"

const Header = () => {
    return (
        <>
        <HeaderCont>
            <Link to=''>
                Logo
            </Link>
            <List>
                <li>
                    <Link to='/join'>
                    <button type="button">Sign In</button>
                    </Link>
                </li>
                <li>
                    <Link to='/login'>
                    <button type="button">Log In</button>
                    </Link>
                </li>
            </List>
        </HeaderCont>
        </>
    )
}

export default Header