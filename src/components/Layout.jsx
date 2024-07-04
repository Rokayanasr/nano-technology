import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {

    return (
        <div className="flex flex-col">
            <Navbar />
            <Outlet />
        </div>
    );
}

export default Layout;
