
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Projects from './Pages/Projects';
import PortfolioMain from './Pages/PortfolioMain';
import Contact from './Pages/Contact';
import WebDevelopment from './Pages/Services/WebDevelopment';

function App() {
  return (
   <Router>
    <Routes>
       <Route path="/"  element={<Home />} />;
       <Route path="About"  element={<About />} />;
       <Route path="Servies"  element={<Services />} />
       <Route path="web-development"  element={<WebDevelopment />}  />;
       
       <Route path="Projects"  element={<Projects />} />;
       <Route path="Portfolio"  element={<PortfolioMain />} />;
       <Route path="Contact-us"  element={<Contact />} />;


    </Routes>
   </Router>
  );
}

export default App;
