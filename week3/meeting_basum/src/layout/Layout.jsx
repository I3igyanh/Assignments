import { Outlet } from 'react-router-dom'
import SideBar from '../components/SideBar'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = () => {
    return (
        <div className="app-shell">
            <Header />
            <SideBar />
            <main className="app-main">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout