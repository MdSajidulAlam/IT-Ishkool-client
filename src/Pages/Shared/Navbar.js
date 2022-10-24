import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
  // const navigate = useNavigate()
  // const [user, loading, error] = useAuthState(auth);
  // const logout = () => {
  //   signOut(auth);
  //   localStorage.removeItem('accessToken');
  // }

  // if (user) {
  //   navigate("/home")
  // }
  const activeStyle = {
    textDecoration: "underline",
  }

  const manuItems = <>
    <li><NavLink style={({ isActive }) =>
      isActive ? activeStyle : undefined
    } to='/home'>Home</NavLink></li>
    <li><NavLink style={({ isActive }) =>
      isActive ? activeStyle : undefined
    } to="/about">About</NavLink></li>
    <li><NavLink style={({ isActive }) =>
      isActive ? activeStyle : undefined
    } to="/enroll">Enroll</NavLink></li>
    <li><NavLink style={({ isActive }) =>
      isActive ? activeStyle : undefined
    } to='/career'>Career</NavLink></li>
    <li><NavLink style={({ isActive }) =>
      isActive ? activeStyle : undefined
    } to="/contact">Contact</NavLink></li>
    <li><NavLink style={({ isActive }) =>
      isActive ? activeStyle : undefined
    } to="/myProfile">Login</NavLink></li>
    {/* <li className='text-orange-700 font-bold'><Link to="/dashBoard">Dashboard</Link></li>
    <li><Link>Certification</Link></li>
    <li><Link>Manage Courses</Link></li>
    <li><Link>Payment Information</Link></li> */}
  </>

  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {manuItems}
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            {manuItems}
          </ul>
        </div>
        <div class="navbar-end">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;