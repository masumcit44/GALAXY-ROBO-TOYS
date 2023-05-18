import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import "./Navbar.css";
import { FaFortAwesomeAlt } from "react-icons/fa";
const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);
  const handleLogOut = () =>{
    logOut()
  }
  return (
    <div className="navbar bg-base-100 nav-design">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/alltoys"> All Toys</Link>
            </li>
            <li>
              <Link to="/blog"> Blogs</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case  font-bold text-2xl">
        <FaFortAwesomeAlt></FaFortAwesomeAlt> <p className="ms-2">ToyGalaxy</p> </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/alltoys"> All Toys</Link>
          </li>
          <li>
            <Link to="/blog"> Blogs</Link>
          </li>
         {
            user ?
            <>
             <li>
            <Link to="/mytoys"> My Toys </Link>
          </li>
          <li>
            <Link to="/addtoy"> Add a toy </Link>
          </li> 
            </> :
            <></>
         }
        </ul>
      </div>
      <div className="navbar-end ">
        {user ? (
          <>
            <div className=" avatar online ">
              <div className="w-10 rounded-full ring ring-slate-400">
                <img src={user?.photoURL} />
              </div>
            </div>
           
              <button onClick={()=>handleLogOut()} className="ms-2 btn btn-accent">Log out</button>

          </>
        ) : (
          <Link to="/login">
            <button  className="btn btn-accent">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
