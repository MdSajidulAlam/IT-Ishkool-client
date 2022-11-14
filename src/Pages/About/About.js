import React from 'react';

const About = () => {
    return (
        <section className='my-12 w-3/5 mx-auto'>
            <h1 className='text-center text-2xl font-semibold'>Wondering what you are getting yourself into?</h1>
            <p className='text-slate-400 text-center'>Let's find out. Shall we?</p>
            <div className='my-8  rounded-xl bg-accent p-8'>
                <h1 className='text-center text-2xl font-semibold'>Who are we?</h1>
                <p className='text-lg mt-3 text-slate-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio nulla nisi dolor fugit, provident hic voluptates ducimus inventore asperiores voluptatem amet fuga nobis laboriosam ex! Deleniti facilis molestiae minima totam libero delectus, natus cumque ut nihil impedit tempora suscipit aliquam voluptatem. Neque accusantium ipsam voluptas nostrum odit maxime itaque obcaecati.</p>
            </div>


            <div className='grid grid-cols-2 gap-8'>
                <div>
                    <div className='p-8 bg-accent rounded-xl'>
                        <h1 className='text-2xl font-semibold'>What is our vision?</h1>
                        <p className='text-lg mt-3 text-slate-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia asperiores, animi suscipit perferendis, ipsum aperiam voluptatum accusamus sint minima dolorem temporibus eveniet cupiditate omnis sit et iusto labore totam nostrum exercitationem amet tempore non adipisci! Voluptas quis temporibus facilis, voluptates, suscipit cupiditate repudiandae molestiae commodi quisquam sapiente, placeat qui? Nemo sequi autem, eligendi libero quisquam laborum officiis quasi commodi deleniti, expedita eos delectus quas esse illo, rem dolorum saepe quam?</p>
                    </div>
                    <div className='p-8 bg-accent rounded-xl mt-8'>
                        <h1 className='text-2xl font-semibold'>Do we priorities?</h1>
                        <p className='text-lg mt-3 text-slate-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta dolorem maiores sint adipisci quibusdam mollitia, sequi vel amet sed quaerat.</p>
                    </div>
                </div>
                <div>
                    <div className='p-8 bg-accent rounded-xl'>
                        <h1 className='text-2xl font-semibold'>Why to choose IT Ishkool?</h1>
                        <p className='text-lg mt-3 text-slate-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ipsum id itaque animi sunt beatae illo eligendi architecto dolores exercitationem, earum, reiciendis praesentium! Mollitia nam recusandae, dolores sequi natus doloribus nostrum, ipsam tempora neque perferendis pariatur minima voluptatibus inventore nihil voluptates dolorum, vero placeat. Cumque explicabo, sit ut, vitae eligendi consequuntur exercitationem delectus provident nemo saepe est. Nobis, saepe odio.</p>
                    </div>
                    <div className='p-8 bg-accent rounded-xl mt-8'>
                        <h1 className='text-2xl font-semibold'>Any honest statement?</h1>
                        <p className='text-lg mt-3 text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nemo eius laboriosam quam deleniti veritatis qui quia, molestias quod voluptatem blanditiis eveniet natus, mollitia perferendis quae est ex laudantium quis!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;