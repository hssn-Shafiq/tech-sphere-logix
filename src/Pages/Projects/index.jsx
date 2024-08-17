import React from 'react';
import Header from '../../Components/Header';
import BreadCrumb from '../../Components/BreadCrumb';
import bg from "../../images/about.jpg"
import ProjectCompleted from '../../Components/ProjectCompleted';
import MainBanner from '../../Components/MainBanner';
import ServicesCards from '../../Components/ServicesCards';
import Portfolio from '../../Components/Portfolio';
import Footer from '../../Components/Footer';

const Projects = () => {

    return(
        <>
        <Header/>
        <BreadCrumb
        from="home"
        pageTitle="Our Projects"
        bgImg={bg}
        />
        <Portfolio/>
        <ProjectCompleted/>
        <MainBanner/>
        <Footer/>
        </>
    )
}
export  default Projects;