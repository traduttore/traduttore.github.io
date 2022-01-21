import React from "react";

import { Helmet } from "react-helmet";

import Welcome from "../components/Welcome.jsx";

import "../styles/app.css";

const IndexPage = () => (
  <div>
    <Helmet
      title={"Traduttore"}
      meta={[
        { name: "description", content: "Traduttore" },
        { name: "keywords", content: "asl, waterloo, uw, fydp, capstone" },
        {
          name: "google-site-verification",
          content: "Wy0ipAo1svzpLXoMUYJUu54KIHc47_MxBjvjoho32T0",
        },
      ]}
    />
    <Welcome />
  </div>
);

export default IndexPage;
