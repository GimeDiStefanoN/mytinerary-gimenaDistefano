import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ links }) {
    return (
        <>
            {links.map((link, index) => (
                <li key={index}><Link to={link.to} className="nav-link">{link.title}</Link></li>
            ))}      
        </>
    )
}

export default Navbar;