import React from 'react';
import Header from '../../Components/Header';
import ServicesCards from '../../Components/ServicesCards';
import Footer from "../../Components/Footer"
import BreadCrumb from '../../Components/BreadCrumb';
import MainBanner from '../../Components/MainBanner';
import bg from "../../images/about.jpg"


function Services() {
    return ( <>
        <Header />
        <BreadCrumb
        pageTitle="Services"
        from="Home"
        bgImg={bg}
        />
        <ServicesCards/>
        <MainBanner />
        <Footer/>
    </> );
}

export default Services;