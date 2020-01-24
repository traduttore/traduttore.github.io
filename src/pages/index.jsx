import React from "react";

import { Helmet } from "react-helmet";

import Welcome from "../components/Welcome.jsx";

import "../styles/app.css";

const IndexPage = () => (
  <div>
    <Helmet
      title={"Alex's Website"}
      meta={[
        { name: "description", content: "Alex Barkin's Personal Website" },
        { name: "keywords", content: "alex, barkin, blog, developer" },
        {
          name: "google-site-verification",
          content: "Wy0ipAo1svzpLXoMUYJUu54KIHc47_MxBjvjoho32T0",
        },
      ]}
    />
    <h1 className="index--title">{"Alex's Website"}</h1>
    <Welcome />
  </div>
);

export default IndexPage;
