import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = [
        { path: `/home`, display: `Home`, id: 1 },
        { path: `/about`, display: `About`, id: 2 },
        { path: `/cars`, display: `Cars`, id: 3 },
        { path: `/blogs`, display: `Blogs`, id: 4 },
        { path: `/contact`, display: `Contact`, id: 5 },
    ];
    return (
        <ul>
            {links?.map((link) => (
                <NavLink to={link.path} key={link.id} className="mx-2 hover:text-amber-500">
                    {link.display}
                </NavLink>
            ))}
        </ul>
    );
};

export default Navbar;
