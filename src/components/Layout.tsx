import { Outlet } from "react-router";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Nav />
      <main className="h-dvh w-full">
        <Outlet />
      </main>
      {/* Here goes the Footer */}
      <Footer />
    </>
  );
};

export default Layout;
