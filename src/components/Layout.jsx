import React from "react"

import { Helmet } from "react-helmet"
import Header from "./Header.jsx"
import Callingcard from "./Callingcard.jsx"

import "../styles/app.css"

const Layout = ({ hasNoBorder, children }) => (
  <>
    <Helmet
      title={"Alex's Website"}
      meta={[
        { name: "description", content: "Alex Barkin's Personal Website" },
        { name: "keywords", content: "alex, barkin, blog, developer" },
      ]}
    ></Helmet>
    <Header />
    <main
      className={hasNoBorder ? "container--main--no-border" : "container--main"}
    >
      {children}
    </main>
    <footer>
      <Callingcard />
    </footer>
  </>
)

export default Layout
