import { Outlet } from "react-router";

const Layout = () => {
    return (
        <>
            {/* Here goes the Navbar */}
            <main>
                <Outlet />
            </main>
            {/* Here goes the Footer */}
        </>
    );
}

export default Layout;