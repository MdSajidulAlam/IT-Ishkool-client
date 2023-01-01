import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logoItIshkool from '../../assests/logo/logoItIshkool.png'
import user from '../../assests/logo/user.png'
import { FiLogOut } from 'react-icons/fi'


const Navbar = () => {
  // const navigate = useNavigate()
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    // localStorage.removeItem('accessToken');
  }

  // if (user) {
  //   navigate("/home")
  // }
  // const activeStyle = {
  //   textDecoration: "underline underline-offset-8",
  // }
  console.log(user)

  const manuItems = <>
    <li><NavLink className={({ isActive }) =>
      isActive ? "underline underline-offset-8" : undefined
    } to='/home'>Home</NavLink></li>
    <li><NavLink className={({ isActive }) =>
      isActive ? "underline underline-offset-8" : undefined
    } to="/about">About</NavLink></li>
    <li><NavLink className={({ isActive }) =>
      isActive ? "underline underline-offset-8" : undefined
    } to="/enroll">Enroll</NavLink></li>
    <li><NavLink className={({ isActive }) =>
      isActive ? "underline underline-offset-8" : undefined
    } to='/career'>Career</NavLink></li>
    <li><NavLink className={({ isActive }) =>
      isActive ? "underline underline-offset-8" : undefined
    } to="/contact">Contact</NavLink></li>


    {/* <li className='bg-secondary text-white rounded-full'><NavLink className={({ isActive }) =>
      isActive ? "bg-secondary text-white rounded-full" : undefined
    } to="/login">Login</NavLink></li>
    <li className='bg-primary text-white border-2 border-secondary rounded-full ml-3'><NavLink to="/signup">Register</NavLink></li> */}
    {/* <li className='text-orange-700 font-bold'><Link to="/dashBoard">Dashboard</Link></li>
    <li><Link>Certification</Link></li>
    <li><Link>Manage Courses</Link></li>
    <li><Link>Payment Information</Link></li> */}
  </>

  return (
    <div>
      <div class="navbar bg-accent text-white shadow-2xl">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow  w-52 bg-slate-50 text-black">
              {manuItems}
              <li className='bg-secondary text-white rounded-full mb-3'><Link to="/login">Login</Link></li>
              <li className='bg-primary text-white border-2 border-secondary rounded-full '><Link to="/signup">Register</Link></li>
            </ul>
          </div >
          <Link to='/' class="btn btn-ghost normal-case text-xl">
            <div className='w-[50px] h-[50px]'>
              <img src={logoItIshkool} alt="" />
            </div>
            <div className='ml-5'>
              <h1 className='text-start underline underline-offset-8'>IT ISHKOOL</h1>
              <small className='font-light'>Learn & Spread Knowledge</small>
            </div>
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex ">
          <ul class="menu menu-horizontal p-7 font-semibold text-2xl">
            {manuItems}

          </ul>

          {
            user ? <div >

              <button onClick={logout} className='flex justify-center items-center text-lg'><FiLogOut className='mx-3' /> Log Out</button>
            </div>
              :
              <div className='flex justify-end items-center'>
                <li className='bg-secondary text-white rounded-full list-none py-1 px-2'><NavLink className={({ isActive }) =>
                  isActive ? "bg-secondary text-white rounded-full" : undefined
                } to="/login">Login</NavLink></li>
                <li className='bg-primary text-white border-2 border-secondary rounded-full ml-3 list-none py-1 px-2'><NavLink to="/signup">Register</NavLink></li>
              </div>
          }

        </div>
        <div class="navbar-end">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src={user?.photoURL == null ? 'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=' : user.photoURL} alt='' />
              </div>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-8 p-2 shadow bg-base-100 text-black rounded-box w-52">
              <li>
                <button class="justify-between">
                  Profile
                </button>
              </li>
              {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
              <li><button>Settings</button></li>
              <li><button onClick={logout} className='btn btn-secondary text-black'>Logout</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;