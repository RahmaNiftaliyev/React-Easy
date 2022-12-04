import React, { useState } from "react";
import Navigation from "./Navigation";
import { IoMdArrowDropright } from "react-icons/io";
import code from "./../assets/png/entypo_code.png";
import information from "./../assets/png/informations_systems_strategy.png";
import lightBulb from "./../assets/png/light-bulb.png";
import mainSettings from "./../assets/png/main_settings.png";
import plug from "./../assets/png/plug-connected.png";
import uiw from "./../assets/png/uiw_mobile.png";
import editor from "./../assets/png/homeEditor_code.png";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { Go } from "../../Go";
import { Button } from "@chakra-ui/react";
const iconArray = [
  {
    src: information,
    text: "Information Systems Strategy",
  },
  {
    src: code,
    text: "Custom Software",
  },
  {
    src: plug,
    text: "Integration Services",
  },
  {
    src: uiw,
    text: "Web, Ecommerce & Mobile Apps",
  },
  {
    src: mainSettings,
    text: "Business Automation",
  },
  {
    src: lightBulb,
    text: "Creativity",
  },
];

const Home = () => {
  const navigate=useNavigate();
  const renderedIcons = iconArray.map((icon, index) => (
    <div className="icon-box">
      <img src={icon.src} alt="" />
      <p>{icon.text}</p>
    </div>
  ));

  return (
    <div className="home-all">
      <Navigation />
      <div className={"home-container"}>
        <div className={"home-header"}>
          <h1>
            <span className="redToYellow text">React.</span>
            <span className="blueToSkyblue text">Reusable.</span>
            <span className="violetToPink text">Components</span>
          </h1>
          <p className="home-subHeader">
            React easy is the platform for frontend developers, providing free and premium components for modern pva react apps.
          </p>
        </div>
        <div className="getStartedContainer">
          <button
          onClick={()=>{Go.to(navigate,"/getting-started")}}
          className={"btn-getStarted  "}>
            Get Started <IoMdArrowDropright className="icon-getStarted" />
          </button>
          <Button
          padding={8}
          marginLeft={5}
          onClick={()=>{Go.to(navigate,"/getting-started")}}
          className={"btn-github_repo  "}>
            Github  
          </Button>
        </div>
        <div className="allServices">
          <p>All our services</p>
          <h2>
            Our flexible <span>components</span> are ready for you
          </h2>
          <p>
            We don't just help with your IT needs. We focus on the entire
            ecosystem surrounding it. Bringing together people, process, and
            technology, we pride ourselves on delivering solutions that work in
            reality. Not theory.
          </p>
          <div className="allServices_grid">{renderedIcons}</div>
        </div>
        <div className="editorSection">
          <div>
          
          <h3>
          Less code. More speed
          </h3>
           <p>
           Spend less time writing UI code and more time building a great experience for your customers.
           </p>
          </div>
          <img className="editor" src={editor} alt="editor" />
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Home;
