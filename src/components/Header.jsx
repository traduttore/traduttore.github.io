import React, { useState } from "react"

import {
    Collapse,
    Tooltip,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

import '../styles/app.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = (props) => { 

    const [isOpen, setIsOpen] = useState(false);
    const [tooltipOpen, setTooltipOpen] = useState(false);
    
    const toggleToolTip = () => setTooltipOpen(!tooltipOpen);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <nav>
            <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Alex Barkin</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                <NavLink href="/About/">About me</NavLink>
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
                    <DropdownItem id="alert--do-not-click">
                        dont click me
                    </DropdownItem>
                    <Tooltip placement="right" isOpen={tooltipOpen} target="alert--do-not-click" toggle={toggleToolTip}>
                        You sure you want to click me?
                    </Tooltip>
                </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
            </Collapse>
        </Navbar>
        </nav>
    )
}

export default Header;
