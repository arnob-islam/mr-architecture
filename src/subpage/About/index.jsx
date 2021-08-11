import React from 'react'
import Hero from './Hero';
import Tabs from './Tabs';
import NumberShowCase from './NumberShowCase';
import AboutCover from './AboutCover';
import WhyUs from './WhyUs';
import ContectUs from '../../components/ContectUs';
import Footer from '../../components/Footer';

const About = () => {
    return (
        <>
            <Hero />
            <Tabs />
            <NumberShowCase />
            <AboutCover />
            <WhyUs />
            <ContectUs />
            <Footer />
        </>
    )
}

export default About
