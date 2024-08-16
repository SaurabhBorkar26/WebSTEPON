import React from "react";
import Nav from "../components/Navbar";
import HomeTitle from "../components/Home/HomeTitle";
import Footer from "../components/Footer";

function Home() {
    return (
      <>
        <div className="mb-20">
          <Nav />
        </div>
        <HomeTitle/>
        <Footer/>
        
      </>
    );
  }
  
  export default Home;