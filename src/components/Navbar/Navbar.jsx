import React from 'react';
import './Navbar.css';

function Navbar({ links }) {
    return (
        <>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {links.map((linkText, index) => (
                        <li key={index}><a className="nav-link">{linkText}</a></li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Navbar;