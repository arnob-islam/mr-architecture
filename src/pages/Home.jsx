import React from 'react'
import Hero from './Hero';
import WhatWeDo from './WhatWeDo';
import WhyUs from './WhyUs';
import Featured from './Featured';
import OurProject from './_Project';
import Testimonial from './Testimonial/index';
import Team from './Team/index';
import Footer from '../components/Footer';
import ContectUs from '../components/ContectUs';
const Home = () => {
    return (
        <>
            <Hero />
            <WhatWeDo />
            <WhyUs />
            <Featured />
            <OurProject />
            <Team />
            <Testimonial />
            <ContectUs />
            <Footer />
        </>
    )
}

export default Home
