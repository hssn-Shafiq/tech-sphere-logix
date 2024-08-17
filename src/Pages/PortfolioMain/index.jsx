import React from 'react';
import Header from '../../Components/Header';
import BreadCrumb from '../../Components/BreadCrumb';
import bg from "../../images/about.jpg"
import Portfolio from '../../Components/Portfolio';
import MainBanner from '../../Components/MainBanner';
import Footer from '../../Components/Footer';

const PortfolioMain = () => {

    return(
        <>
        <Header/>
        <BreadCrumb
         from="home"
         pageTitle="Our Projects"
         bgImg={bg}
        />
        <Portfolio/>
        <MainBanner/>
        <Footer/>
        </>
    )
}

export default PortfolioMain;