import React from 'react';

const Guide = () => {
    return (
        <section className='w-4/5 mx-auto '>
            <div className='grid grid-cols-5 w-11/12 mr-auto'>
                <div className='col-span-2 bg-accent m-5 p-5 rounded-2xl shadow-2xl'>
                    <h1 className='text-2xl font-bold'>Free Courses</h1>
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, doloremque. Tempora vel, est adipisci maiores minima repellat dicta cumque dolores in libero exercitationem? Mollitia recusandae, excepturi sequi ullam nesciunt reiciendis.</p>
                </div>
                <div className='col-span-2 bg-accent m-5 p-5 rounded-2xl shadow-2xl'>
                    <h1 className='text-2xl font-bold'>1 to 1 Guidance</h1>
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi possimus recusandae consequatur nulla vitae quis?</p>
                </div>
            </div>
            {/* ------------------------------------------------------- */}
            <div className='grid grid-cols-5 w-11/12 ml-auto'>
                <div className='col-span-2 bg-accent m-5 p-5 rounded-2xl shadow-2xl'>
                    <h1 className='text-2xl font-bold'>24/7 Live support</h1>
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis temporibus assumenda fuga nisi ipsam alias odio officia accusamus similique minima!</p>
                </div>
                <div className='col-span-2 bg-accent m-5 p-5 rounded-2xl shadow-2xl'>
                    <h1 className='text-2xl font-bold'>Talented Mentors</h1>
                    <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dolore nulla aperiam ipsum, reiciendis ipsam. Aliquid atque exercitationem neque rerum officia perspiciatis vel quidem quo voluptas ipsa molestiae porro libero quae magnam dolorem nulla necessitatibus debitis eum fugit, earum placeat?</p>
                </div>
            </div>

        </section>
    );
};

export default Guide;