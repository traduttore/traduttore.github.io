import React from "react";

import headshotAlex from "../images/headshot_alex.jpg";
import headshotAlexiou from "../images/headshot_alexiou.jpeg";
import headshotCam from "../images/headshot_cam.jpeg";
import headshotDanial from "../images/headshot_danial.jpeg";
import "../styles/app.css";

const Callingcard = () => (
  <div className="container--address">
    <address className="container--address-me">
    <div style={
      {height: "1px",
      width: "100%",
      backgroundColor: "darkgray",
      marginBottom: "10px"
    }}/>
    <h2 style={{width:"fit-content", marginLeft:"auto", marginRight:"auto"}}><a href='/Team/'>{`Meet the team\n`}</a></h2>
    <div style={{width:"fit-content", marginLeft:"auto", marginRight:"auto", display: "flex"}}>
      <a href="https://www.linkedin.com/in/abarkin/" target="_blank">
        <img src={headshotAlex} className="headshot" alt="headshot"/>
      </a>
      <a href="https://www.linkedin.com/in/alex-alexiou/" target="_blank">
       <img src={headshotAlexiou} className="headshot" alt="headshot" />
      </a>
      <a href="https://www.linkedin.com/in/camcnelson/" target="_blank">
       <img src={headshotCam} className="headshot" alt="headshot" />
      </a>
      <a href="https://www.linkedin.com/in/dmohazab/" target="_blank">
       <img src={headshotDanial} className="headshot" alt="headshot" />
      </a>
    </div>
    </address>
  </div>
);

export default Callingcard;
