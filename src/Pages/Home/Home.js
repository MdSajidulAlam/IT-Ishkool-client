import React from 'react';
import Banner from './Banner';
import FAQ from './FAQ';
import FeaturedCourse from './FeaturedCourse';
import Guide from './Guide';
import Time from './Time';
import Advertisment from './Advertisment';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Guide />
            <FeaturedCourse />
            <FAQ />
            <Advertisment />
            {/* <Time></Time> */}
        </div>
    );
};

export default Home;