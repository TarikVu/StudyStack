import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
    return (
        <>
            <Header />
            <main className="App">

                {/* Nested routes will show in outlet, see App.js */}
                <Outlet />
            </main>
        </>
    )
}

export default Layout