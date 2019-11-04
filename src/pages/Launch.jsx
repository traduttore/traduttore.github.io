import React from "react"

import { Link } from 'gatsby';

import Layout from '../components/Layout.jsx'
import waveIcon from "../images/WAVE_logo.png"
import dpiIcon from "../images/DPI_logo.png"

import '../styles/app.css';

export default () => (
    <Layout>
        <h1>Welcome to my homepage!</h1>
        <article className="blog-post-content">
            <p>My name is Alex Barkin, and im very glad you found my website!</p>
            <p>I enjoy coding, longboarding, and Jeeps. I'm currently a student at the University of Waterloo, and have had three co-op placements.</p>
            <figure className="coop-icons">
                <img src={waveIcon} alt="Wave Logo" className="coop-icon"/>
                <img src={waveIcon} alt="Wave Logo" className="coop-icon"/>
                <img src={dpiIcon} alt="DPI Logo" className="coop-icon"/>
            </figure>
            <br/>Take a look around, and if you like what you see make sure to <Link to='/Contact'>reach out!</Link>
        </article>
    </Layout>
)