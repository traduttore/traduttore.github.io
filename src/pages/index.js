import React from "react"

import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';

import '../styles/index.css'

const IndexPage = props => (
<body>
    <h1 className='index--title'>Alex's Website</h1>
    <Img className="index--image" fixed={props.data.launchImage.childImageSharp.fixed} alt="" />
    <Link className='index--launch' to='/about/'>Launch.</Link>
</body>
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