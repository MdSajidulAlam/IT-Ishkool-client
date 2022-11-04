import React from 'react';
import Marquee from 'react-fast-marquee';
import logoItIshkool from '../../assests/logo/logoItIshkool.png'

const Career = () => {
    return (
        <div>
            <div className='flex justify-center items-center mt-56 mb-8'>
                <img className='w-[50px] h-[50px] rounded-full' src={logoItIshkool} alt="" />
                <div className='flex justify-center items-center ml-4'>
                    <h1>Follow us on Instagram</h1>
                </div>
            </div>
            <div className='w-2/4 mx-auto'>
                <Marquee speed={40}>
                    <img className='w-[150px] m-8' src={logoItIshkool} alt="" />
                    <img className='w-[150px] m-8' src={logoItIshkool} alt="" />
                    <img className='w-[150px] m-8' src={logoItIshkool} alt="" />
                    <img className='w-[150px] m-8' src={logoItIshkool} alt="" />
                    <img className='w-[150px] m-8' src={logoItIshkool} alt="" />

                </Marquee>
            </div>
        </div>
    );
};

export default Career;