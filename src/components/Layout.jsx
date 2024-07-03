import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {

    return (
        <div className="flex flex-col  min-h-screen">
            <Navbar className="z-10"></Navbar>
            <Outlet />
        </div>
    );
}

export default Layout;
