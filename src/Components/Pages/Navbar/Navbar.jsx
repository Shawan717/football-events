import { Link, NavLink } from 'react-router-dom';
import userPng from '../../../../public/img/user.png';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';



const Navbar = () => {
    const { user, logOut ,setUser} = useContext(AuthContext)

    const link = <>
        <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[red] underline" : ""}>Home</NavLink></li>
        <li><NavLink to="/worldCupWinners" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[red] underline" : ""}>WorldCup</NavLink></li>
        <li><NavLink to="/championsLeague" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[red] underline" : ""}>Champions League</NavLink></li>
        <li><NavLink to="/blogs" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[red] underline" : ""}>Blog</NavLink></li>
        <li><NavLink to="/nationalTeam" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[red] underline" : ""}>National Teams</NavLink></li>

    </>
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('successfully');
                setUser(null)
            }).catch((error) => {
                console.log(error);
            });

    }
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[18px]">
                        {link}
                    </ul>
                </div>
                <a className=" font-bold text-[40px] "><span className='text-[red]'>FOOTBALL </span> HISTORY</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[18px]">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <p>{user?.email}</p>


                {
                    user ? <>
                        <img className='w-[45px] h-[45px] mr-3' src={user.imgURL? user.imgURL : userPng} alt="user" />
                        <a onClick={handleLogOut} className="btn bg-[red]">Log Out</a>
                    </>
                        :
                        <>
                            <img className='w-[45px] h-[45px] mr-3' src={userPng} alt="user" />
                            <a className="btn bg-[red]"><Link to={"/login"}>Login</Link></a>
                        </>
                }



            </div>
        </div>

    );
};

export default Navbar;