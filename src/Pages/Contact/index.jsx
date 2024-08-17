import React from 'react';
import Header from '../../Components/Header';
import BreadCrumb from '../../Components/BreadCrumb';
import bg from "../../images/about.jpg"
import MainBanner from '../../Components/MainBanner';
import Footer from '../../Components/Footer';

const Contact = () => {

    return(
        <>
        <Header/>
        <BreadCrumb
         from="home"
         pageTitle="Contact Us"
         bgImg={bg}
        />
        <MainBanner/>

        <Footer/>
        </>
    )
}
export default Contact;