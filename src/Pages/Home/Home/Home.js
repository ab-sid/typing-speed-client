import React from 'react';
import Asked from '../Asked/Asked';
import Blog from '../Blog/Blog';
import Feedback from '../Feedback/Feedback';
import Hero from '../Hero/Hero';
import SiteVideo from '../SiteVideo/SiteVideo';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <SiteVideo></SiteVideo>
            <Feedback></Feedback>
            <Blog></Blog>
            <Asked></Asked>

        </div>
    );
};

export default Home;