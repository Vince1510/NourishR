import { Outlet } from "react-router";

const Layout = () => {
    return (
        <>
            {/* Here goes the Navbar */}
            <main className="h-dvh w-full">
                <Outlet />
            </main>
            {/* Here goes the Footer */}
        </>
    );
}

export default Layout;