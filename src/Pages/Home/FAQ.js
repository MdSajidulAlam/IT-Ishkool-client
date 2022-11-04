import React from 'react';

const FAQ = () => {
    return (
        <div>
            <h1 className='text-center text-5xl font-bold my-24'>You may wander</h1>
            {/* ------------------------------ */}
            <div tabIndex={0} className="collapse collapse-plus border  bg-accent border-base-300 rounded-box w-4/5 mx-auto text-4xl">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-4xl font-medium peer-checked:bg-secondary bg-accent">
                    Focus me to see content
                </div>
                <div className="collapse-content">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
            {/* ----------------------------- */}
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-accent rounded-box w-4/5 mx-auto text-4xl mt-12">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-4xl font-medium peer-checked:bg-secondary bg-accent">
                    Focus me to see content
                </div>
                <div className="collapse-content">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;