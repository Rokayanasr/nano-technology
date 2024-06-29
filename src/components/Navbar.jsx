import i18n from "i18next";
import { useEffect } from "react";
import cookies from "js-cookie";
function Navbar() {
    const lng = cookies.get("i18next");
    useEffect(() =>{
        window.document.dir = i18n.dir()
    },[lng]);

    return (
        <>
        <button onClick={()=>i18n.changeLanguage("en")}>en</button>
        <button onClick={()=>i18n.changeLanguage("ar")}>ar</button>
        </>
)
}

export default Navbar