import React from 'react'
import Hero from './Hero';
import AboutService from './AboutService';
import ServiceCover from './ServiceCover';
import WeProvide from './WeProvide';
// import Progres from './Progres';
import ContectUs from '../../components/ContectUs';
import Footer from '../../components/Footer';

const Index = () => {
    return (
        <>
            <Hero />
            <AboutService />
            <ServiceCover />
            <WeProvide />
            {/* <Progres /> */}
            <ContectUs />
            <Footer />
        </>
    )
}

export default Index
