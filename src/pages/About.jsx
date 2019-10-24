import React from "react"

import { Link } from 'gatsby';

import Layout from '../components/Layout.jsx'

import '../styles/about.css';

export default () => (
    <Layout>
        <h1 className="about--title">About me</h1>
        <Link to='/'>Go to home page.</Link>
    </Layout>
)