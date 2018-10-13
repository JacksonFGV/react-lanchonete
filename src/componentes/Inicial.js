import React from 'react';
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
  DropdownItem } from 'reactstrap';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';

export default class Inicial extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Lanchonete</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem >
                <Link to="/" style={{textDecoration:'none',color:'grey'}}><NavLink>Login</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/cadastro/" style={{textDecoration:'none',color:'grey'}}><NavLink>Cadastro</NavLink></Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}