import React from "react";

import { Link } from "gatsby";
import {
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
  Collapse,
  Card,
  CardBody,
} from "reactstrap";

import Layout from "../components/Layout.jsx";
import waveIcon from "../images/logo_wave.png";
import dpiIcon from "../images/logo_dpi.png";

import "../styles/app.css";

class Home extends React.Component {
  state = {
    coopOneIsOpen: false,
    coopTwoIsOpen: false,
    coopThreeIsOpen: false,
    hoverCoopOne: false,
    hoverCoopTwo: false,
    hoverCoopThree: false,
  };

  toggleCoopOne = () =>
    this.setState({
      coopOneIsOpen: !this.state.coopOneIsOpen,
      coopTwoIsOpen: false,
      coopThreeIsOpen: false,
      hoverCoopOne: false,
    });
  toggleCoopTwo = () =>
    this.setState({
      coopTwoIsOpen: !this.state.coopTwoIsOpen,
      coopOneIsOpen: false,
      coopThreeIsOpen: false,
      hoverCoopTwo: false,
    });
  toggleCoopThree = () =>
    this.setState({
      coopThreeIsOpen: !this.state.coopThreeIsOpen,
      coopTwoIsOpen: false,
      coopOneIsOpen: false,
      hoverCoopThree: false,
    });

  handleCoopOneHover() {
    if (this.state.hoverCoopOne === false) {
      this.setState({ hoverCoopOne: true });
    }
  }

  handleLeaveCoopOneHover() {
    if (this.state.hoverCoopOne === true) {
      this.setState({ hoverCoopOne: false });
    }
  }

  handleCoopTwoHover() {
    if (this.state.hoverCoopTwo === false) {
      this.setState({ hoverCoopTwo: true });
    }
  }

  handleLeaveCoopTwoHover() {
    if (this.state.hoverCoopTwo === true) {
      this.setState({ hoverCoopTwo: false });
    }
  }

  handleCoopThreeHover() {
    if (this.state.hoverCoopThree === false) {
      this.setState({ hoverCoopThree: true });
    }
  }

  handleLeaveCoopThreeHover() {
    if (this.state.hoverCoopThree === true) {
      this.setState({ hoverCoopThree: false });
    }
  }

  render() {
    return (
      <Layout>
        <h1>Traduttore</h1>
        <article className="blog-post-content">
          <p>Hi!</p>
          <p>{`My name is Alex Barkin, and I'm very glad you found my website!`}</p>
          <p>
            {`I'm currently a member of the Mechatronics class of 2022 at the
            University of Waterloo. I am going into my third year of studies and
            have had 3 co-ops ranging from mechanical design to software design.`}
          </p>
        </article>
      </Layout>
    );
  }
}
export default Home;
