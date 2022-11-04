import React from 'react';
import Banner from './Banner';
import Career from './Career';
import FAQ from './FAQ';
import FeaturedCourse from './FeaturedCourse';
import Time from './Time';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <FeaturedCourse />
            <FAQ />
            <Career />
            {/* <Time></Time> */}
        </div>
    );
};

export default Home;