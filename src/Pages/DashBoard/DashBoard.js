import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className='grid grid-cols-4 mt-3'>
            <div className="drawer drawer-mobile col-span-3">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <h2 className='text-3xl font-bold text-white text-center my-5'>Welcome to your Dashboard</h2>
                    <Outlet />


                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-60 bg-accent text-white">
                        {/* <!-- Sidebar content here --> */}
                        {/* {!admin && <> */}
                        <li className=''><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/dashboard/myorders'>Settings</Link></li>
                        <li><Link to='/dashboard/review'>My Courses</Link></li>
                        {/* </>} */}

                        {/* {admin && <> */}
                        {/* <li><Link to='/dashboard/users'>All Users</Link></li>
                    <li><Link to='/dashboard/manageorder'>Manage All Order</Link></li>
                    <li><Link to='/dashboard/addproduct'>Add A Product</Link></li>
                    <li><Link to='/dashboard/manageproduct'>Manage Products</Link></li> */}
                        {/* </>} */}
                        {/* {admin && <>
                    <li><Link to='/dashboard/users'>All Users</Link></li>
                    <li><Link to='/dashboard/addDoctor'>Add a Doctor</Link></li>
                    <li><Link to='/dashboard/manageDoctor'>Manage Doctors</Link></li>
                </>} */}
                    </ul>

                </div>
            </div>

            {/* --------------------------------------------- */}
            <div className="drawer drawer-end col-span-1 bg-accent">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    {/* <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label> */}
                    <div className="avatar flex justify-center items-center mt-8">
                        <div className="w-24 rounded-full">
                            <img src="https://placeimg.com/192/192/people" alt='' />
                        </div>
                    </div>
                    {/* <Outlet /> */}
                </div>
                {/* <div className="drawer-side">
                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <!-- Sidebar content here -->
                        <li className='text-white'><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div> */}
            </div>
        </div>
    );
};

export default DashBoard;