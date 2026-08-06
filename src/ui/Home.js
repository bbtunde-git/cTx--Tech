import React from "react";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import ClientList from "../components/ClientList";
import Facts from "../components/Facts";
import ServiceList from "../components/ServiceList";
import Technology from "../components/Technology";

const Home = () => {
  return (
    <>
      <InnerHeader />
      <Carousel />
      <main id="main">
        <ServiceList/>
        <Technology/>
        <ClientList/>
        <Facts/>
        {/* <Revenue/> */}
      </main>
      <Footer />
    </>
  );
};

export default Home;
