import React from "react"

import { Link } from 'gatsby';

import Layout from '../components/Layout.jsx'

import '../styles/app.css';

export default () => (
    <Layout>
        <h1>About me</h1>
        <article className="blog-post-content">
            <p>put some tech used here!</p>
            <br/>Want to know morex? Check out my <Link to='/Resume'>Resume.</Link>
        </article>
    </Layout>
)