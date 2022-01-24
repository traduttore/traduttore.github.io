import React from "react";

import Layout from "../components/Layout.jsx";

import headshotAlex from "../images/headshot_alex.jpg";
import headshotAlexiou from "../images/headshot_alexiou.jpeg";
import headshotCam from "../images/headshot_cam.jpeg";
import headshotDanial from "../images/headshot_danial.jpeg";

import "../styles/app.css";

const Team = () => (
  <Layout>
    <h1>About Us</h1>
    <article className="blog-post-content">
      <div style={{display: 'flex'}}>
        <a href="https://www.linkedin.com/in/abarkin/" target="_blank">
          <img src={headshotAlex} className="headshot" alt="headshot"/>
        </a>
        <h2 style ={{flex: 1,alignSelf: "center"}}>Alex Barkin</h2>
      </div>
      <p>{`My name is Alex Barkin and I am in charge of front-end development and the display 
      development for this project. Outside of this project I am an incoming fullstack developer
      for Nextdoor, a hyper-local social media company. I am excited to break barriers of communication
      for ASL users with this project.`}</p>
      <div style={{display: 'flex'}}>
        <a href="https://www.linkedin.com/in/camcnelson/" target="_blank">
          <img src={headshotCam} className="headshot" alt="headshot" />
        </a>
        <h2 style ={{flex: 1,alignSelf: "center"}}>Cam Nelson</h2>
      </div>
      <p>{`Hi, I’m Cam. I am in charge of product management for this project and have therefore 
      taken on many roles, including design and development on both the frontend and backend. 
      After graduation, I will be joining Wish full-time as an Associate Product Manager. `}</p>
      <div style={{display: 'flex'}}>
        <a href="https://www.linkedin.com/in/alex-alexiou/" target="_blank">
          <img src={headshotAlexiou} className="headshot" alt="headshot" />
        </a>
        <h2 style ={{flex: 1,alignSelf: "center"}}>Alex Alexiou</h2>
      </div>
      <p>{`Hi I'm Alex`}</p>
      <div style={{display: 'flex'}}>
        <a href="https://www.linkedin.com/in/dmohazab/" target="_blank">
          <img src={headshotDanial} className="headshot" alt="headshot" />
        </a>
        <h2 style ={{flex: 1,alignSelf: "center"}}>Danial Mohazab</h2>
      </div>
      <p>{`Hi I'm Cam`}</p>
    </article>
  </Layout>
);

export default Team;
