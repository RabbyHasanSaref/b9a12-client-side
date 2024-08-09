import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {

    const { createLogout, user } = useAuth();

    const NavBar = <>
        <NavLink to="/"><li className="text-[15px] font-medium uppercase mr-5">home</li></NavLink>
        <NavLink to="/about"><li className="text-[15px] font-medium uppercase mr-5">about</li></NavLink>
        <NavLink to="/allclass"><li className="text-[15px] font-medium uppercase mr-5">all class</li></NavLink>
        <NavLink to="/teacher"><li className="text-[15px] font-medium uppercase mr-5">teach on [ online edu bd ]</li></NavLink>
        <NavLink to="/contact"><li className="text-[15px] font-medium uppercase mr-5">contact</li></NavLink>
    </>

    const handleLogout = () => {
        createLogout()
            .then(() => {
                toast('Your Logout successful');
            })
            .catch((error) => {
                console.error(error);
            })
    }

    return (
        <div className="navbar bg-orange-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-orange-50 rounded-box w-52 space-y-5 text-center">
                        {NavBar}
                    </ul>
                </div>
                <Link to="/"><h2 className="lg:text-[20px] text-[12px] font-bold uppercase text-green-500">Online <span className="text-red-500">Edu</span> Bd</h2></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavBar}
                </ul>
            </div>
            <div className="navbar-end mr-5">
                {
                    user ? '' : <Link to="/login"><p className="lg:text-[15px] text-[12px] font-medium uppercase">Login | Register</p></Link>
                }
            </div>
            <div className="dropdown dropdown-end">
                {
                    user ? <>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="online-edu-bd" src={user.photoURL} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-orange-50 rounded-box w-52 space-y-3">
                            <li className="text-center text-[15px] font-medium uppercase">{user.displayName}</li>
                            <button className="btn bg-orange-50 uppercase">
                                <Link to="/dashboard">Dashboard</Link>
                            </button>
                            <button onClick={handleLogout} className="btn bg-orange-50 uppercase">Logout</button>
                        </ul>
                    </>
                        :
                        <>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="online-edu-bd" src="https://i.ibb.co/JysYSFt/enter.png" />
                                </div>
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;