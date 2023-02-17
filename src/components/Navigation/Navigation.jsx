import { Link } from "react-router-dom";
import { List } from "./Navigation.styled";

const Navigation = () => {
    return (
        <>
        <Link to=''>
                Logo
            </Link>
            <List>
                <li>
                    <Link to='/register'>
                    <button type="button">Sign In</button>
                    </Link>
                </li>
                <li>
                    <Link to='/login'>
                    <button type="button">Log In</button>
                    </Link>
                </li>
            </List>
        </>
    )
}

export default Navigation;