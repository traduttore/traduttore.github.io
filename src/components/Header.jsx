import React from "react"

import {
    Collapse,
    Tooltip,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Modal,
    ModalBody,
    UncontrolledDropdown,
    DropdownToggle,
    Progress,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

import '../styles/app.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class Header extends React.Component {
    state = {
        dropDownIsOpen:false,
        toolTipIsOpen:false,
        modalIsOpen:false,
        loadingPercent: 0,
    }

    modalToggle = () => this.setState({modalIsOpen:!this.state.modalIsOpen});
    toolTipToggle = () => this.setState({toolTipIsOpen:!this.state.toolTipIsOpen});
    dropDownToggle = () => this.setState({dropDownIsOpen:!this.state.dropDownIsOpen});

    updatePercent = () => {
        if (this.state.modalIsOpen && this.state.loadingPercent < 98){
            this.setState({loadingPercent:this.state.loadingPercent+1});
        }
    }

    componentDidMount() {
        setInterval(() => {this.updatePercent()
        }, 100)
    }
    
    render() {
        return (
            <nav>
                <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">Alex Barkin</NavbarBrand>
                <NavbarToggler onClick={this.dropDownToggle} />
                <Collapse isOpen={this.state.dropDownIsOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/Home/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/About/">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/Resume/">Resume</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/alexbarkin">GitHub</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Blogs
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem tag="a" href="/blog-posts/hello">
                            hello
                        </DropdownItem>
                        <DropdownItem tag="a" href="/blog-posts/file-2">
                            file-2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem id="alert--do-not-click" onClick={this.modalToggle} onMouseEnter={this.toolTipToggle} onMouseLeave={this.toolTipToggle}>
                            dont click me
                        </DropdownItem>
                        <Tooltip placement="right" target="alert--do-not-click" isOpen={this.state.toolTipIsOpen} toggle={this.toolTipToggle}>
                            You sure you want to click me?
                        </Tooltip>
                        <Modal isOpen={this.state.modalIsOpen} toggle={this.modalToggle} keyboard={false} backdrop="static">
                            <ModalBody className="modal-main">
                                <h4>Loading...</h4>
                                <Progress animated color="info" value={this.state.loadingPercent} />
                            </ModalBody>
                        </Modal>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                </Collapse>
            </Navbar>
            </nav>
        )
    }
}

export default Header;
