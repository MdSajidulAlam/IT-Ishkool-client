import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoItIshkool from '../../assests/logo/logoItIshkool.png'

const Footer = () => {
  const { pathname } = useLocation();

  if (pathname === "/dashboard") return null;

  return (
    <div>
      <footer class="footer p-10 bg-accent text-white">
        <div>
          <span class=" text-3xl font-bold">EXPLORE</span>
          <a class="link link-hover text-slate-400 text-xl">IT Ishkool</a>
          <a class="link link-hover  text-slate-400 text-xl">IT Ishkool Community</a>

        </div>
        <div>
          <span class="text-3xl font-bold">OVERVIEW</span>
          <Link to='about' class="link link-hover  text-slate-400 text-xl">About</Link>
          <Link to='/career' class="link link-hover  text-slate-400 text-xl">Career</Link>
          <Link to='/enroll' class="link link-hover  text-slate-400 text-xl">Enroll</Link>
          <Link to='/team' class="link link-hover  text-slate-400 text-xl">Team</Link>
          <Link to='/contact' class="link link-hover  text-slate-400 text-xl">Contact</Link>
          <a class="link link-hover  text-slate-400 text-xl">Privacy Policy</a>
        </div>
        <div>
          <span class="text-3xl font-bold">COMMUNITY</span>
          <a class="link link-hover text-slate-400 text-xl">Join Community</a>
          <a class="link link-hover text-slate-400 text-xl">Support</a>
          <a class="link link-hover text-slate-400 text-xl">Help</a>
          <div>
            <span class="text-3xl font-bold">ADVERTISE</span>
            <div class="form-control w-80">
              <label class="label">
                <span class="label-text text-slate-400 text-xl">Mailing List</span>
              </label>
              <div class="relative">
                <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" />
                <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
              </div>
            </div>
          </div>

        </div>
        {/* <div className='flex justify-center items-center'>
          <img className='w-1/4' src={logoItIshkool} alt="" />
        </div> */}
      </footer>


    </div>
  );
};

export default Footer;