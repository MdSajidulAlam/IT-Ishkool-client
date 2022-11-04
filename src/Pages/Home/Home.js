import React from 'react';
import Banner from './Banner';
import FAQ from './FAQ';
import FeaturedCourse from './FeaturedCourse';
import Time from './Time';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <FeaturedCourse />
            <FAQ />
            {/* <Time></Time> */}
        </div>
    );
};

export default Home;