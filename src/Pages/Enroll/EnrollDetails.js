import React from 'react';
import { BsStarFill, BsStarHalf, BsClock, BsGlobe } from 'react-icons/bs';
import { BiUserCheck } from 'react-icons/bi'
import { GoThreeBars } from 'react-icons/go'
import { MdPlayArrow } from 'react-icons/md'
import { Link } from 'react-router-dom';

const EnrollDetails = () => {
    return (
        <section className='w-4/5 mx-auto grid lg:grid-cols-7  my-12 gap-10'>
            <div className='col-span-5'>
                <h1 className='text-5xl font-semibold'>Adobe Premier Pro - Basic Training Courses</h1>
                <div className='mt-5'>
                    <div className="flex flex-col w-full lg:flex-row">
                        <div className="flex justify-center items-center">
                            <div className="avatar mr-3">
                                <div className="w-12 rounded-full">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <p>Amit Mondol</p>
                        </div>
                        <div className='w-[1px] bg-slate-500 rounded-full mx-5'></div>
                        <div className="flex justify-center items-center">
                            <h1>Flim Editor <span className='text-slate-400'>- Poran(2022), Shaan(2021), Hawa(2022) etc.</span></h1>
                        </div>
                    </div>
                    <div className='flex flex-col w-full lg:flex-row mt-5'>
                        <div className=' flex justify-center items-center'>
                            <h1 className=''><span className='font-semibold'>4.5</span>/5</h1>
                            <div className='flex justify-center items-center mx-3'>
                                <BsStarFill className='text-orange-400' />
                                <BsStarFill className='text-orange-400' />
                                <BsStarFill className='text-orange-400' />
                                <BsStarFill className='text-orange-400' />
                                <BsStarHalf className='text-orange-400' />
                            </div>
                            <p className='text-xs mx-2'>(74)</p>
                        </div>
                        <div className='w-[1px] bg-slate-500 rounded-full mx-5'></div>
                        <div className='flex justify-center items-center'>
                            <BiUserCheck className='text-2xl mr-3' />
                            <p>102 already enrolled</p>
                        </div>
                    </div>
                </div>
                <h1 className='mt-8 text-xl font-semibold'>About this course</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, esse nisi laborum, ad quae quam dolorem, dolorum natus ab laboriosam id. Atque odio sunt quas laborum officiis. Vel, maiores? Repellendus enim reiciendis nihil. Pariatur deserunt repudiandae voluptatum ipsam sit illo.</p>
                <div className='mt-8'>
                    <h1 className='text-2xl'>Your Progress</h1>
                    <progress className="progress progress-secondary  bg-white" value="70" max="100"></progress>
                    <h1>70% Completed</h1>
                </div>
            </div>
            <div className='col-span-2 bg-accent p-5'>
                <h1 className='my-3'><span className='line-through'>200 credits</span> <span className='font-bold'>Free</span></h1>
                <div className='flex justify-between'>
                    <h1 className='flex justify-center items-center'><GoThreeBars /> Level</h1>
                    <h1>Beginner</h1>
                </div>
                <div className='h-[1px] bg-slate-500 rounded-full my-5'></div>
                <div className='flex justify-between'>
                    <h1 className='flex justify-center items-center'><BsClock /> Duration</h1>
                    <h1>6.7 hours</h1>
                </div>
                <div className='h-[1px] bg-slate-500 rounded-full my-5'></div>
                <div className='flex justify-between'>
                    <h1 className='flex justify-center items-center'><BsGlobe /> Language</h1>
                    <h1>Bengali/Bangla</h1>
                </div>
                <div className='my-4'>
                    <h1>This course includes:</h1>
                    <div className='flex justify-start items-center'>
                        <h1 className='text-secondary'><MdPlayArrow /></h1>
                        <h1>Tutorials</h1>
                    </div>
                    <div className='flex justify-start items-center'>
                        <h1 className='text-secondary'><MdPlayArrow /></h1>
                        <h1>Tutorial videos</h1>
                    </div>
                    <div className='flex justify-start items-center'>
                        <h1 className='text-secondary'><MdPlayArrow /></h1>
                        <h1>Courses materials</h1>
                    </div>
                    <div className='flex justify-start items-center'>
                        <h1 className='text-secondary'><MdPlayArrow /></h1>
                        <h1>Live QnA session</h1>
                    </div>
                    <div className='flex justify-start items-center'>
                        <h1 className='text-secondary'><MdPlayArrow /></h1>
                        <h1>Certtification</h1>
                    </div>
                </div>
                <button className='btn w-full max-w-xs btn-secondary my-3 text-white'>Enroll Now</button>
                <button className='btn w-full max-w-xs btn-primary text-white border-1 border-secondary'  >Add to Wishlist</button>

            </div>
        </section>
    );
};

export default EnrollDetails;