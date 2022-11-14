import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';

const Team = () => {
    return (
        <section className='w-4/5 mx-auto my-12 grid grid-cols-3 gap-24'>
            <div className='py-8 bg-accent rounded-xl'>
                <div className="avatar w-full flex justify-center items-center mb-5">
                    <div className=" rounded-full">
                        <img src="https://placeimg.com/192/192/people" alt='' />
                    </div>
                </div>
                <h1 className='text-center text-2xl font-semibold'>First Name Last Name</h1>
                <p className='text-center text-slate-400'>Post Name</p>

                <div className='w-4/5 mx-auto flex justify-center items-center mt-5'>

                    <div className='p-3 rounded-full bg-primary text-xl'>
                        <BsFacebook />
                    </div>


                    <div className='p-3 rounded-full bg-primary mx-3 text-xl'>
                        <BsInstagram />
                    </div>


                    <div className='p-3 rounded-full bg-primary text-xl'>
                        <BsLinkedin />
                    </div>

                </div>
            </div>
            <div className='py-8 bg-accent rounded-xl'>
                <div className="avatar w-full flex justify-center items-center mb-5">
                    <div className=" rounded-full">
                        <img src="https://placeimg.com/192/192/people" alt='' />
                    </div>
                </div>
                <h1 className='text-center text-2xl font-semibold'>First Name Last Name</h1>
                <p className='text-center text-slate-400'>Post Name</p>

                <div className='w-4/5 mx-auto flex justify-center items-center mt-5'>

                    <div className='p-3 rounded-full bg-primary text-xl'>
                        <BsFacebook />
                    </div>


                    <div className='p-3 rounded-full bg-primary mx-3 text-xl'>
                        <BsInstagram />
                    </div>


                    <div className='p-3 rounded-full bg-primary text-xl'>
                        <BsLinkedin />
                    </div>

                </div>
            </div>
            <div className='py-8 bg-accent rounded-xl'>
                <div className="avatar w-full flex justify-center items-center mb-5">
                    <div className=" rounded-full">
                        <img src="https://placeimg.com/192/192/people" alt='' />
                    </div>
                </div>
                <h1 className='text-center text-2xl font-semibold'>First Name Last Name</h1>
                <p className='text-center text-slate-400'>Post Name</p>

                <div className='w-4/5 mx-auto flex justify-center items-center mt-5'>

                    <div className='p-3 rounded-full bg-primary text-xl'>
                        <BsFacebook />
                    </div>


                    <div className='p-3 rounded-full bg-primary mx-3 text-xl'>
                        <BsInstagram />
                    </div>


                    <div className='p-3 rounded-full bg-primary text-xl'>
                        <BsLinkedin />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Team;