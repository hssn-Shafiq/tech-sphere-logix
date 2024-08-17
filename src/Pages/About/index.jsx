import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import bg from "../../images/about.jpg"
import BreadCrumb from "../../Components/BreadCrumb";
import MissionStatement from "../../Components/MissionStatement";
import WelcomeSection from "../../Components/WelcomeSection";
import OurTeam from "../../Components/OurTeam";
import Portfolio from "../../Components/Portfolio";

function About() {
  return (
    <>
      <Header />
        <BreadCrumb
        pageTitle="About Us"
        from="Home"
        bgImg={bg}
        />

        <MissionStatement />

        <WelcomeSection/>
        <Portfolio/>    
        <OurTeam/>

      <Footer />
    </>
  );
}

export default About;
