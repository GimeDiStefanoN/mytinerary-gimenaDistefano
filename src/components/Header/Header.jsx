import Logo from '/Logo.png';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {

    const photo = useSelector(store => store.userReducer.photo)


    const linksForNavbar1 = [
        { title: 'Home', to: '/' },
        { title: 'Cities', to: '/cities' },
        { title: 'Login', to: '/login', icon: photo },
        { title: 'SignUp', to: '/signup' },
        { title: 'SignOut' }
    ];

    
    return (
        <>
            <header>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-80">
                                <Navbar links={linksForNavbar1} />
                            </ul>
                        </div>
                        <Link className="btn btn-ghost normal-case text-xl"><img className='logo' src={Logo} alt="Logo MyTinerary" /></Link>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <Navbar links={linksForNavbar1} />
                        </ul>
                    </div>
                    
                </div>
            </header>
        </>
    )
}

export default Header