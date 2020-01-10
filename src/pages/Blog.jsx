import React from "react";

import { Link } from "gatsby";

import Layout from "../components/Layout.jsx";

import "../styles/app.css";

const Blog = () => (
  <Layout>
    <h1>Blogs</h1>
    <nav>
      <a href="/blog-posts/Wave1">Wave Coop #1</a>
      <br />
      <a href="/blog-posts/Wave2">Wave Coop #2</a>
    </nav>
    <Link to="/About">Learn more about me!</Link>
  </Layout>
);

export default Blog;
