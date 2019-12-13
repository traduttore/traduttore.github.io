import React from "react";

import { Link } from "gatsby";

import Layout from "../components/Layout.jsx";

import resumePdf from "../images/resume_alex.pdf";
import "../styles/app.css";

const Resume = () => (
  <Layout>
    <h1>Resume</h1>
    <embed src={resumePdf} className="pdf--resume" />
    <br />
    <Link to="/About">Learn more about me!</Link>
  </Layout>
);

export default Resume;
