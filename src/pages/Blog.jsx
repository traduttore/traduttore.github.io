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
      <br />
      <a href="/blog-posts/Blog3">Blog #3</a>
      <br />
      <a href="/blog-posts/Blog4">Blog #4</a>
      <br />
      <a href="/blog-posts/Blog5">Blog #5</a>
      <br />
      <a href="/blog-posts/Blog6">Blog #6</a>
    </nav>
  </Layout>
);

export default Blog;
