import React from "react"

import { Link } from 'gatsby';

import Layout from '../components/Layout.jsx'

import '../styles/app.css';

export default () => (
    <Layout>
        <h1>Resume</h1>
        <iframe title="resume" src="https://docs.google.com/document/d/e/2PACX-1vTQ9Ji-VFgOROXJjHPOX93jUJhUVusvBc-IAilN8jkuEm25FSvhukFEMhyFx3PDP6iV-M9nD4Df37-f/pub?embedded=true" className="resume"></iframe><br/>
        <Link to='/About'>Learn more about me!</Link>
    </Layout>
)