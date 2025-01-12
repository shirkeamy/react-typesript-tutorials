import React, { JSX } from "react";

const Menu: () => JSX.Element = () => {

    let menuList: string[] = ["Master", "Admin", "Home"];

        return (
            <h1>
                {
                    menuList.map((menu: string, index: number)=> (
                        <p id={`menu-id-`+index}>{menu}</p>
                    ))
                }
            </h1>
        )
}

export default Menu;