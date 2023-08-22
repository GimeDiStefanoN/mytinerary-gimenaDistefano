import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ links }) {
    return (
        <>
            {links.map((link, index) => (
                <li key={index} className="navbar-item">
                    {link.title === 'Login' ? (
                        <Link className="nav-link" to={link.to}>
                            <img src={link.icon} alt="Login Icon" className='Icons' />
                        </Link>
                    ) : (
                        <Link to={link.to} className="nav-link">
                            {link.title}
                        </Link>
                    )}
                </li>
            ))}        
        </>
    )
}

export default Navbar;