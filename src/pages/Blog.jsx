import React from "react"

import { Link } from "gatsby"

import Layout from "../components/Layout.jsx"

import "../styles/app.css"

export default () => (
  <Layout>
    <h1>Blogs</h1>
    <nav>
      <a href="/blog-posts/hello">hello blog</a>
      <br />
      <a href="/blog-posts/file-2">another blog</a>
    </nav>
    <Link to="/About">Learn more about me!</Link>
  </Layout>
)
