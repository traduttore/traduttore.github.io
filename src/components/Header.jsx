import React from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import logo from "../../static/trad-icon.png";

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
        <Navbar dark className="nav-head" expand="md">
          <NavbarBrand href="/Home/"><img style={{width: '22px', height: '32px'}}src={logo}/></NavbarBrand>
          <NavbarToggler onClick={this.dropDownToggle} />
          <Collapse isOpen={this.state.dropDownIsOpen} navbar>
            <Nav style={{fontWeight: 700}} className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/Home/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Team/">Team</NavLink>
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
                  <DropdownItem tag="a" href="/blog-posts/Blog3">
                    Blog #3
                  </DropdownItem>
                  <DropdownItem tag="a" href="/blog-posts/Blog4">
                    Blog #4
                  </DropdownItem>
                  <DropdownItem divider style={{borderTopColor: '#3E7CB1'}}/>
                  <DropdownItem tag="a" href="/Blog">
                    All Blogs
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
