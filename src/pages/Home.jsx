import React from "react"

import { Link } from 'gatsby';
import { UncontrolledPopover, PopoverHeader, PopoverBody, Collapse, Card, CardBody } from 'reactstrap';

import Layout from '../components/Layout.jsx'
import waveIcon from "../images/WAVE_logo.png"
import dpiIcon from "../images/DPI_logo.png"

import '../styles/app.css';

class Home extends React.Component {
    state = {
        coopOneIsOpen:false,
        coopTwoIsOpen:false,
        coopThreeIsOpen:false,
        hoverCoopOne:false,
        hoverCoopTwo:false,
        hoverCoopThree:false,
    }

    toggleCoopOne = () => this.setState({
            coopOneIsOpen:!this.state.coopOneIsOpen,
            coopTwoIsOpen:false,
            coopThreeIsOpen:false,
            hoverCoopOne:false,
        });
    toggleCoopTwo = () => this.setState({
        coopTwoIsOpen:!this.state.coopTwoIsOpen,
        coopOneIsOpen:false,
        coopThreeIsOpen:false,
        hoverCoopTwo:false,
    });
    toggleCoopThree = () => this.setState({
        coopThreeIsOpen:!this.state.coopThreeIsOpen,
        coopTwoIsOpen:false,
        coopOneIsOpen:false,
        hoverCoopThree:false,
    });

    handleCoopOneHover(){
        if (this.state.hoverCoopOne === false){
            this.setState({hoverCoopOne: true})
        }
    }

    handleLeaveCoopOneHover(){
        if (this.state.hoverCoopOne === true){
            this.setState({hoverCoopOne: false})
        }
    }

    handleCoopTwoHover(){
        if (this.state.hoverCoopTwo === false){
            this.setState({hoverCoopTwo: true})
        }
    }

    handleLeaveCoopTwoHover(){
        if (this.state.hoverCoopTwo === true){
            this.setState({hoverCoopTwo: false})
        }
    }

    handleCoopThreeHover(){
        if (this.state.hoverCoopThree === false){
            this.setState({hoverCoopThree: true})
        }
    }

    handleLeaveCoopThreeHover(){
        if (this.state.hoverCoopThree === true){
            this.setState({hoverCoopThree: false})
        }
    }

    render() {
        return(
            <Layout>
                <h1>Welcome to my homepage!</h1>
                <article className="blog-post-content">
                    <p>Hi!</p>
                    <p>My name is Alex Barkin, and im very glad you found my website!</p>
                    <p>I'm currently a member of the Mechatronics class of 2022 at the University of Waterloo. I am going into my third year of studies and have had 3 co-ops ranging from mechanical design to software design.</p>
                    <figure className="coop-icons">
                        <input type="image" src={dpiIcon} alt="DPI Logo" className="coop-icon" id="coop-1" onClick={this.toggleCoopOne}
                        onMouseEnter={this.handleCoopOneHover.bind(this)} onMouseLeave={this.handleLeaveCoopOneHover.bind(this)}/>
                        <input type="image" src={waveIcon} alt="Wave Logo" className="coop-icon" id="coop-2" onClick={this.toggleCoopTwo}
                        onMouseEnter={this.handleCoopTwoHover.bind(this)} onMouseLeave={this.handleLeaveCoopTwoHover.bind(this)}/>
                        <input type="image" src={waveIcon} alt="Wave Logo" className="coop-icon" id="coop-3" onClick={this.toggleCoopThree}
                        onMouseEnter={this.handleCoopThreeHover.bind(this)} onMouseLeave={this.handleLeaveCoopThreeHover.bind(this)}/>
                    </figure>
                    <Collapse isOpen={this.state.coopOneIsOpen}>
                            <Card className="coop--card">
                                <CardBody className="coop--card-body">
                                    My first coop placement was at Design Plastics International (DPI) from May-Aug of 2018. 
                                    DPI is a small company which designs, prototypes, and builds displays for stores and tradeshows. 
                                    Here I got to get hands on experiences with manufacturing techniques, the design process, and working with clients to make sure the end product is just right!
                                    Be sure to check out more details on my <Link to='/Resume'>Resume.</Link>
                                </CardBody>
                            </Card>
                    </Collapse>
                    <Collapse isOpen={this.state.coopTwoIsOpen}>
                            <Card className="coop--card">
                                <CardBody className="coop--card-body">
                                    My second coop placement was at Wave HQ from Jan-Apr of 2019. 
                                    Wave is a start up in Leslieville, Toronto that provides financial solutions for small businesses.
                                    This coop, I was on the Machine Learning Team, and Learned a lot about working with Machine Learning models, and how to leverage them in data analysis.
                                    Be sure to check out more details on my <Link to='/Resume'>Resume.</Link>
                                </CardBody>
                            </Card>
                    </Collapse>
                    <Collapse isOpen={this.state.coopThreeIsOpen}>
                            <Card className="coop--card">
                                <CardBody className="coop--card-body">
                                    My third coop placement was also at Wave HQ, but, from Sept-Dec of 2019. 
                                    Wave is a start up in Leslieville, Toronto that provides financial solutions for small businesses.
                                    This coop, I was on the accounting platform Team, and focused on well designed, maintanable, and reusable code.
                                    Be sure to check out more details on my <Link to='/Resume'>Resume.</Link>
                                </CardBody>
                            </Card>
                    </Collapse>
                    <UncontrolledPopover isOpen={this.state.hoverCoopOne} placement="bottom" target="coop-1">
                        <PopoverHeader>Design Plastics International</PopoverHeader>
                        <PopoverBody>My first coop was at Design Plastics Internation from May-Aug of 2018. Click the logo to learn more.</PopoverBody>
                    </UncontrolledPopover>
                    <UncontrolledPopover isOpen={this.state.hoverCoopTwo} placement="bottom" target="coop-2">
                        <PopoverHeader>Wave HQ - Machine Learning</PopoverHeader>
                        <PopoverBody>My second coop was at Wave HQ from Jan-Apr of 2019. Click the logo to learn more.</PopoverBody>
                    </UncontrolledPopover>
                    <UncontrolledPopover isOpen={this.state.hoverCoopThree} placement="bottom" target="coop-3">
                        <PopoverHeader>Wave HQ - Accounting Platform</PopoverHeader>
                        <PopoverBody>My third coop was at Wave HQ from Sept-Dec of 2019. Click the logo to learn more.</PopoverBody>
                    </UncontrolledPopover>
                    <p> I enjoy travelling the world with my friends & family and discovering new adventures along the way. I also have a passion for Jeeps, especially Wranglers! I am always looking for new opportunities to learn and grow my skills as a young engineer. </p>
                    <p>Now that you're here, take a look around!</p>
                    <p>If you see something you like (or something you don't!), lets grab a coffee and <Link to='/Contact'>chat!</Link></p>
                    <br/>Like what you see? Check out my <Link to='/Resume'>Resume.</Link>
                </article>
            </Layout>
        )
    }
}
export default Home;
