import Box from "components/Box/Box";
import { NavLink } from "react-router-dom";



const Home = () => {
    return (
        <>
        <h1 style={{textAlign: 'center'}}>
            PHONEBOOK
        </h1>
        <Box width={350} textAlign='center' display='flex' flexDirection='column'>
            <p style={{fontSize: '20px', textAlign: 'center', marginBottom: '32px'}}>
            Welcome to a site that will make your life easier. All you need to do is go through an easy registration
            </p>
            <Box>
            <NavLink className='link_getStart'  to='/register'>
            Get Start
            </NavLink>
            </Box>
        </Box>
        </>
    )
}

export default Home;