import React from 'react';
import { BsFillTelephoneFill, BsWhatsapp } from 'react-icons/bs'
import { AiFillMail } from 'react-icons/ai'
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const Contact = () => {

    const [clicked, setClick] = useState(false)

    const { register, formState: { errors }, handleSubmit } = useForm();
    let errorMessage
    const onSubmit = () => {

    }

    return (
        <div className=' my-12 w-3/6 mx-auto'>
            <h1 className='text-3xl  font-semibold text-center'>Get in touch</h1>
            <p className='text-slate-400 text-center'>Contact us for any queries, help or support</p>
            {/* ----------------- Icons Part------------- */}
            <div className='grid lg:grid-cols-3 w-4/6 mx-auto'>
                <div>
                    <div className='flex justify-center items-center'>
                        <BsFillTelephoneFill className='m-4 text-2xl' />
                    </div>
                    <h1 className='text-slate-400 text-center'>+8801888888888</h1>
                </div>
                <div>
                    <div className='flex justify-center items-center'>
                        <AiFillMail className='m-4 text-2xl' />
                    </div>
                    <h1 className='text-slate-400 text-center'>example@gmail.com</h1>
                </div>
                <div>
                    <div className='flex justify-center items-center'>
                        <BsWhatsapp className='m-4 text-2xl' />
                    </div>
                    <h1 className='text-slate-400 text-center'>+8801888888888</h1>
                </div>
            </div>


            {/* ---------------------- Contact Form ------------------ */}


            <div className='bg-accent shadow-2xl p-5 mt-8 rounded-xl'>
                <h2 className=" text-xl font-bold">Contact Form</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2'>
                    <div>

                        {/* ----------------------------- Name -------------------- */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text text-white font-semibold">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder=''
                                class="input input-bordered w-full h-[35px] max-w-xs bg-accent border-1 border-white"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "name is required"
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}

                            </label>
                        </div>



                        {/* --------------------------- Email --------------------- */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text text-white font-semibold">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder=""
                                class="input input-bordered w-full h-[35px] max-w-xs bg-accent border-1 border-white"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>
                        {/* ------------------------ Number -------------------- */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text text-white font-semibold">Number</span>
                            </label>
                            <input
                                type="number"
                                placeholder=""
                                class="input input-bordered w-full h-[35px] max-w-xs bg-accent border-1 border-white"
                                {...register("number", {
                                    required: {
                                        value: true,
                                        message: "Number is required"
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.number?.type === 'required' && <span class="label-text-alt text-red-500">{errors.number.message}</span>}


                            </label>
                        </div>

                    </div>
                    {/* --------------------- Description ------------------- */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white font-semibold">Message</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24 w-full max-w-xs bg-accent border-1 border-white" placeholder="Bio"></textarea>



                    </div>

                    {errorMessage}

                </form>
                <div>
                    <h1>What service are you asking for?</h1>
                    <div className='flex flex-row justify-center items-center my-5'>
                        <div className='active:bg-secondary w-[75px] cursor-pointer text-center border border-secondary m-3  rounded-lg'>
                            <h1 className=''>Courses</h1>
                        </div>
                        <div className='active:bg-secondary w-[75px] cursor-pointer text-center border border-secondary m-3  rounded-lg'>
                            <h1 className=''>Enroll</h1>
                        </div>
                        <div className='active:bg-secondary w-[75px] cursor-pointer text-center border border-secondary m-3  rounded-lg'>
                            <h1 className=''>Pricing</h1>
                        </div>
                        <div className='active:bg-secondary w-[75px] cursor-pointer text-center border border-secondary m-3  rounded-lg'>
                            <h1 className=''>Vanue</h1>
                        </div>
                        <div className='active:bg-secondary w-[75px] cursor-pointer text-center border border-secondary m-3  rounded-lg'>
                            <h1 className=''>Team</h1>
                        </div>
                        <div className='active:bg-secondary w-[75px] cursor-pointer text-center border border-secondary m-3  rounded-lg'>
                            <h1 className=''>Career</h1>
                        </div>
                        <div className='active:bg-secondary w-[75px] cursor-pointer text-center border border-secondary m-3  rounded-lg'>
                            <h1 className=''>Other</h1>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center'>
                    <input className='btn w-full h-[35px] text-white max-w-xs rounded-full btn-secondary font-bold' value='Send Message' type="submit" />
                </div>
            </div>
        </div>
    );
};

export default Contact;