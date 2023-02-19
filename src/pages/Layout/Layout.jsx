import Header from "components/Header/Header"
import { flex, justifyContent } from "styled-system"

const Layout = ({children}) => {
    return (
        <>
        <Header />

        <main style={{padding: '128px'}}>
            {children}
        </main>
        </>
    )
}

export default Layout