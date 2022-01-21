import React from "react";

import { Link } from "gatsby";

import Layout from "../components/Layout.jsx";

import "../styles/app.css";

const Blog = () => (
  <Layout>
    <h1>Blogs</h1>
    <nav>
      <a href="/blog-posts/Blog1">Blog #1</a>
      <br />
      <a href="/blog-posts/Blog2">Blog #2</a>
    </nav>
    <Link to="/Team">Learn more about the team!</Link>
  </Layout>
);

export default Blog;
