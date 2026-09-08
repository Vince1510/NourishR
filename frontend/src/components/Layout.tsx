import { Outlet } from "react-router";
import Nav from "./Nav";

const Layout = () => {
  return (
    <>
      <Nav />
      <main className="h-dvh w-full">
        <Outlet />
      </main>
      {/* Here goes the Footer */}
    </>
  );
};

export default Layout;
