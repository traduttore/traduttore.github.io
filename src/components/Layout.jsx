import React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Header from './Header.jsx'

//import 'bootstrap/dist/css/bootstrap.min.css'

export default ({ children }) => (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
                title
                menuLinks {
                    name
                    link
                }
            }
          }
        }
      `}
      render={data => (
        <React.Fragment>
          <Helmet
            title={"Alex's Website"}
            meta={[
              { name: 'description', content: "Alex Barkin's Personal Website" },
              { name: 'keywords', content: 'alex, barkin, blog, developer' },
            ]}
          >
          </Helmet>
        <Header/>
        <main className="container--main">
            {children}
        </main>
        <footer>
            <address className="container--address">
                <p>Posted by: Alex Barkin</p> 
                <p>Contact: <a href="mailto:alex.barkin@edu.uwaterloo.ca">alex.barkin@edu.uwaterloo.ca</a>.
                </p> 
            </address>
        </footer>
        </React.Fragment>
      )}
    />
)