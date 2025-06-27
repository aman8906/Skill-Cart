import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import About from "../pages/About";
import Contact from "../pages/Contact";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <About/>
      <Contact/>
      
    </>
  );
}

export default Home;
