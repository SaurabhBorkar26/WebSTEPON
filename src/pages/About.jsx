import React from "react";
import Nav from "../components/Navbar";
import AboutUs from "../pages/Aboutus"
import Team from "../components/Team/Team";
import Footer from "../components/Footer";

function About() {
    return (
      <>
        <div className="mb-20">
          <Nav />
        </div>
        <div>
        <AboutUs/>
        <Team/>
        <Footer/>
        </div>
       
        
      </>
    );
  }
  
  export default About;