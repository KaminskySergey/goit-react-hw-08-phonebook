import Header from "components/Header/Header"

const Layout = ({children}) => {
    return (
        <>
        <Header />

        <main style={{padding: '64px'}}>
            {children}
        </main>
        </>
    )
}

export default Layout