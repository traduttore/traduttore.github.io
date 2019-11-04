import React from "react"

import { graphql } from 'gatsby';

import Welcome from '../components/Welcome.jsx'

import '../styles/index.css'

const IndexPage = props => (
  <div>
    <h1 className='index--title'>Alex's Website</h1>
    <Welcome/>
  </div>
)

export default IndexPage;
