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
            <p>My name is Alex, and I'm currently a student at the university of Waterloo.</p>
            <p>Now that you're here, take a look around!</p>
            <p>And... If theres anything good, contact me!</p>
        </article>
        <Link to='/'>Return to Launch screen.</Link>
    </Layout>
)