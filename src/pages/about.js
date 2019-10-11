import React from "react"

import { Link } from 'gatsby';

import '../styles/about.css';

export default () => (
<div>
    <h1 className="about--title">About me</h1>
    <p>Here's a little bit about me.</p>
    <Link to='//'>Go to home page.</Link>
</div>
)