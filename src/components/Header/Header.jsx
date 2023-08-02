import Logo from '/Logo.png';
import './Header.css';
import Navbar from '../Navbar/Navbar';

function Header() {
    const linksForNavbar1 = ['Home', 'Cities'];

    return (
        <>
            <header>
                <div className="navbar bg-base-100">
                    {/* LOGO */}
                    <div className="flex-1">
                        <img className='logo' src={Logo} alt="" />
                    </div>
                    <div className="flex-none gap-2">
                        {/* BUSCADOR */}
                        {/* <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                        </div> */}
                        <Navbar links={linksForNavbar1} />

                        {/* BOTON LOGIN */}
                        <div className="dropdown dropdown-end" >
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar" >
                                <div className="w-10 rounded-full" >
                                    <img src="https://cdn-icons-png.flaticon.com/512/1783/1783012.png" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header