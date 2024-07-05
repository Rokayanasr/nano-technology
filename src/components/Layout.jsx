import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Navi from "./Navi";

function Layout() {

    return (
        <div className="flex flex-col">
            {/* <Navbar /> */}
            <Navi />
            <Outlet />
            
        </div>
    );
}

export default Layout;
