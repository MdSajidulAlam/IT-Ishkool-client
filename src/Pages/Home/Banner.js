import React from 'react';
import banner1 from '../../assests/banner/image1.jpg'
import banner2 from '../../assests/banner/image2.jpg'
import banner4 from '../../assests/banner/image3.jpg'
// import banner5 from '../../assests/banner/image4.jpg'
import logoItIshkool from '../../assests/logo/logoItIshkool.png'
const Banner = () => {
  return (
    <section className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-12 ml-12'>
      {/* Text Section */}
      <div className='p-8'>
        <div className='text-8xl font-extrabold'>
          <h1>Learn The Best</h1>
          <h1>From The Best</h1>
        </div>
        <div>
          <p className='mr-28 text-xl'>It Ishkool is an e-learning platform with an aim of educating people in IT out of any cost. We are working with some talented mentors in order to give the best guidance to our students. With more than 10 (ten) free courses, IT Ishkool helps you to enrich your knowledge in the tech field.</p>
        </div>
        <button className='btn btn-secondary my-3 rounded-full text-white'>Enroll</button>
      </div>
      {/* Logo Section  */}
      <div className='p-8 flex justify-center items-center'>
        <img className=' h-80' src={logoItIshkool} alt="" />
      </div>
    </section>
  );
};

export default Banner;