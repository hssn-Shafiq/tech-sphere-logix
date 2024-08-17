import React from "react";
import Header from "../../Components/Header";
import MainBanner from "../../Components/MainBanner";
import TopCards from "../../Components/TopCards";
import WelcomeSection from "../../Components/WelcomeSection";
import MissionStatement from "../../Components/MissionStatement";
import OurTeam from "../../Components/OurTeam";
import ProjectCompleted from "../../Components/ProjectCompleted";
import Portfolio from "../../Components/Portfolio";
import Footer from "../../Components/Footer";


function Home() {
  return (
    <>
      <Header />
      <MainBanner />
      <TopCards />
    <WelcomeSection />
    <MissionStatement/>
    <OurTeam/>
    <ProjectCompleted/>
    <Portfolio/>
    <Footer/>
    </>
  );
}

export default Home;
