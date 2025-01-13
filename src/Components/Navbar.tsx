import React from "react";
import "./style.css"

const Navbar: React.FC = () => {
    return (
        <>
            <ul>
                <li><a href="/">Dashboard</a></li>
                <li><a href="item-master">Item Master</a></li>
                <li><a href="company-master">Company Master</a></li>
            </ul>
        </>
    )
}

export default Navbar;