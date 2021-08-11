import React from 'react'
import Hero from './Hero'
import Clients from './Clients';
import ClientsPhotos from './ClientsPhotos';
import ContectUs from '../../components/ContectUs';
import Footer from '../../components/Footer';
const Index = () => {
    return (
        <>
            <Hero />
            <Clients />
            <ClientsPhotos />
            <ContectUs />
            <Footer />
        </>
    )
}

export default Index
