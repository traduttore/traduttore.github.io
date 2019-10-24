import React from "react"

// import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import Welcome from '../components/Welcome.jsx'

import '../styles/index.css'

const IndexPage = props => (
  <div>
    <h1 className='index--title'>Alex's Website</h1>
    {/* <Img className="index--image" fixed={props.data.launchImage.childImageSharp.fixed} alt="" /> */}
    <Welcome/>
  </div>
)

export default IndexPage;

export const query = graphql`
  query {
    launchImage: file(relativePath: { eq: "launchImage.png" }) {
      childImageSharp {
        fixed(width: 500, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`