import * as React from "react";

import Layout from "../components/Layout.jsx";
import { UncontrolledCarousel } from "reactstrap";
import Jeep1 from "../images/jeep_1.jpg";
import Jeep2 from "../images/jeep_2.jpg";
import Jeep3 from "../images/jeep_3.jpg";
import Jeep4 from "../images/jeep_4.jpg";

import "../styles/app.css";

const items = [
  {
    src: Jeep1,
    key: "1",
  },
  {
    src: Jeep2,
    key: "2",
  },
  {
    src: Jeep3,
    key: "3",
  },
  {
    src: Jeep4,
    key: "4",
  },
];

export const scrollToRef = ref => {
  window.scrollTo(0, ref.current ? ref.current.offsetTop : 100);
};

const Jeep = () => {
  const myRef = React.useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <Layout hasNoBorder>
      <div className="flexContainer">
        <UncontrolledCarousel items={items} className="slider" />
        <div className="verticalContainer">
          <button onClick={executeScroll} className="button--scroll">
            Jump to content
          </button>
        </div>
      </div>
      <article className="blog-post-content--border">
        <h1 ref={myRef}>Blueberry Beast</h1>
      </article>
    </Layout>
  );
};

export default Jeep;
