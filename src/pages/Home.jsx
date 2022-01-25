import React from "react";

import Layout from "../components/Layout.jsx";
import danialSign from "../images/danial_sign.gif";
import header_image from "../images/home_header.jpeg";

import "../styles/app.css";

class Home extends React.Component {
  render() {
    return (
      <Layout image={<img style={{width:'100%', borderRadius: '0'}}src={header_image}/>}>
        <article className="blog-post-content">
          <p>
            {`Welcome to the Traduttore website. Traduttore is an invention 
            completed for Group 17's 2022 Mechatronics FYDP. Group 17 consists
            of Alex Barkin, Alex Alexiou, Cam Nelson, and Danial Mohazab. We 
            are excited to bring you this project and help ASL users in the
            process.`}
          </p>
          <h2>The Problem</h2>
          <p>
            {`Many people take for granted how easy it is to communicate and interact 
            with people in their everyday lives, especially in service environments. 
            For example, walking into a Starbucks and ordering your favourite drink 
            from the menu is something that comes very easily for people. For others, 
            the conversation that comes with interacting in service environments is much 
            more difficult. People who use ASL as their main form of communication 
            experience a disconnect in these very situations; it is rare to encounter 
            someone who knows ASL in an everyday service environment like a Starbucks 
            who they can freely communicate with. This often comes with needing additional 
            steps such as writing things down on paper or on a phone in order to communicate 
            back and forth, which is not acceptable with the technologically advanced time we 
            live in. For this reason, there is a need to create a product that bridges this 
            gap in communication between ASL users and everyday service environment workers, 
            which is where Traduttore can come in. `}
          </p>
          <h2>About the Product</h2>
          <p>
            {`Traduttore is an English-ASL translator specifically designed for service 
            environments that aims to make the experience of communicating between an ASL 
            user and a non-ASL user much easier and efficient. Using gesture recognition, 
            text-to-speech, and speech-to-text technology, Traduttore can make walking into a 
            Starbucks and ordering a drink much easier for ASL speakers that typically experience 
            a gap in communication.`}
          </p>
          <p style={{width:'100%'}} >
          <img className="centered-image" style={{width:'-webkit-fill-available', maxWidth:'500px'}} src={danialSign}/>
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
