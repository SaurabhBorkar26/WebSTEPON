import React from "react";
import Nav from "../components/Navbar";
import HomeTitle from "../components/Home/HomeTitle";
import Footer from "../components/Footer";
import Service from "../components/Service/Service";
import Contact from "../components/contactus/Contact";

function Home() {
    return (
      <>
        <div className="mb-20">
          <Nav />
          <HomeTitle/>
        </div>
        
        <Service/>
        <Contact/>
        <Footer/>
        
      </>
    );
  }
  
  export default Home;