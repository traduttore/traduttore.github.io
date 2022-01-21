import React from "react";

import Layout from "../components/Layout.jsx";
import danialSign from "../images/danial_sign.gif";

import "../styles/app.css";

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Traduttore</h1>
        <article className="blog-post-content">
          <p>
            {`Welcome to the Traduttore website. Traduttore is an invention 
            completed for Group 17's 2022 Mechatronics FYDP. Group 17 consists
            of Alex Barkin, Alex Alexiou, Cam Nelson, and Danial Mohazab. We 
            are excited to bring you this project and help ASL users in the
            process.`}
          </p>
          <p>
          <img style={{maxWidth:'100%'}} src={danialSign}/>
          </p>
          <p>
            {`Thank you for checking out our website. Take a look around and if
            you see something you like (or don't like) feel free to reach out!`}
          </p>
        </article>
      </Layout>
    );
  }
}
export default Home;
