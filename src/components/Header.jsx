import React from "react";

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
  DropdownItem,
} from "reactstrap";

import "../styles/app.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Header extends React.Component {
  state = {
    dropDownIsOpen: false,
    toolTipIsOpen: false,
    modalIsOpen: false,
    loadingPercent: 0,
  };

  modalToggle = () =>
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
      toolTipIsOpen: false,
    });
  toolTipToggle = () => {
    if (!this.state.modalIsOpen) {
      this.setState({ toolTipIsOpen: !this.state.toolTipIsOpen });
    }
  };
  dropDownToggle = () =>
    this.setState({ dropDownIsOpen: !this.state.dropDownIsOpen });

  updatePercent = () => {
    if (this.state.modalIsOpen && this.state.loadingPercent < 98) {
      this.setState({ loadingPercent: this.state.loadingPercent + 1 });
    }
  };

  componentDidMount() {
    setInterval(() => {
      this.updatePercent();
    }, 100);
  }

  render() {
    return (
      <nav>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Traduttore</NavbarBrand>
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
                <NavLink href="https://github.com/traduttore" target="_blank">
                  GitHub
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://docs.google.com/presentation/d/1FJB6xehWq72gQg_H1gJjM2kmY3PL8P7qUFVa5VZLVAI/edit?usp=sharing" target="_blank">
                  Pitch
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Blogs
                </DropdownToggle>
                <DropdownMenu className="darkDropdown" right>
                  <DropdownItem tag="a" href="/blog-posts/Blog1">
                    Blog #1
                  </DropdownItem>
                  <DropdownItem tag="a" href="/blog-posts/Blog2">
                    Blog #2
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </nav>
    );
  }
}

export default Header;
