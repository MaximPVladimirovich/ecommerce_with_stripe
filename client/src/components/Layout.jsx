import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout