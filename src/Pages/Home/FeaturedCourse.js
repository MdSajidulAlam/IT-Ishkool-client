import React from 'react';

const FeaturedCourse = () => {
    return (
        <div className='grid grid-cols-3 gap-4 w-4/5 mx-auto rounded-2xl bg-accent shadow-2xl'>
            <div className='p-5 lg:col-span-1 md:col-span-3'>
                <img className='rounded-2xl w-full' src="https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3liZXJwdW5rJTIwY2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className='p-5 lg:col-span-2 md:col-span-3'>
                <h1 className='text-4xl font-bold'>Course Name</h1>
                <p className='text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias assumenda voluptate officia animi eaque quisquam eveniet numquam dolor, temporibus, ea consectetur, quaerat at. Incidunt ut maxime sequi non provident quas quis debitis qui consectetur quam enim velit illo eveniet, aut beatae hic temporibus aspernatur dolore sit, aliquid eos! Veniam, nihil.</p>

                <button className='btn btn-secondary w-full rounded-full text-white lg:text-2xl md:text-xl sm:text-xl mt-auto'>150 Credits</button>

            </div>
        </div>
        // <div className="hero min-h-screen bg-accent shadow-2xl">
        //     <div className="hero-content flex-col lg:flex-row">
        //         <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
        //         <div>
        //             <h1 className="text-5xl font-bold">Box Office News!</h1>
        //             <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //             <button className="btn btn-primary w-full items-end">Get Started</button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default FeaturedCourse;