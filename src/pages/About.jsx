import React from "react"

import { Link } from 'gatsby';

import Layout from '../components/Layout.jsx'

import '../styles/about.css';

export default () => (
    <Layout>
        <h1 className="about--title">About me</h1>
        <article className="blog-post-content">
            <p>Hi!</p>
            <p>Im glad you found my website.</p>
            <p>My name is Alex, and I'm currently studying Mechatronics at the University of Waterloo. 
                I am going into my third year of studies and have had 3 co-ops ranging from mechanical design to 
                software design. I enjoy travelling the world with my friends & family and discovering new 
                adventures along the way. I am always looking for new opportunities to learn and grow my skills as 
                a young engineer. </p>
            <p>Now that you're here, take a look around!</p>
            <p>If you see something you like (or something you don't!), lets grab a coffee and chat!</p>
        </article>
        <Link to='/'>Return to Launch screen.</Link>
    </Layout>
)