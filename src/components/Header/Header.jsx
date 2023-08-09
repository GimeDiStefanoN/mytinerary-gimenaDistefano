import Logo from '/Logo.png';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    const linksForNavbar1 = [
        { title: 'Home', to: '/' },
        { title: 'Cities', to: '/cities' },
        { title: 'Login', to: '/login', icon: '/Icons/avatarLogin.png' },
        { title: 'SignUp', to: '/signup' }
    ];

    return (
        <>
            <header>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <Navbar links={linksForNavbar1} />
                            </ul>
                        </div>
                        <Link className="btn btn-ghost normal-case text-xl"><img className='logo' src={Logo} alt="Logo MyTinerary" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <Navbar links={linksForNavbar1} />
                        </ul>
                    </div>
                    {/* <div className="navbar-end">
                            <a className="btn">Button</a>
                        </div> */}
                </div>
            </header>
        </>
    )
}

export default Header