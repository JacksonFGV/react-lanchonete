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
  DropdownItem,
  Button } from 'reactstrap';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';

import fire from './fire';

export default class TelaInicial extends React.Component {

  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
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

  logout() {
    console.log("Logout!!");
    fire.auth().signOut();
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/selecao">Tela de Seleção</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link onClick={this.logout} style={{textDecoration:'none',color:'grey'}} to="/"><NavLink>Logout</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/pagamento" style={{textDecoration:'none',color:'grey'}}><NavLink>Pagamento</NavLink></Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Opções
                </DropdownToggle>
                <DropdownMenu right>
                <Link to="/sucos/" style={{textDecoration:'none',color:'grey'}}>
                  <DropdownItem>
                    Sucos
                  </DropdownItem>
                  </Link>
                  <Link to="/bolos/" style={{textDecoration:'none',color:'grey'}}>
                  <DropdownItem>
                    Bolos
                  </DropdownItem>
                  </Link>
                  <Link to="/doces/" style={{textDecoration:'none',color:'grey'}}>
                  <DropdownItem>
                    Doces
                  </DropdownItem>
                  </Link>
                  <Link to="/salgados/" style={{textDecoration:'none',color:'grey'}}>
                  <DropdownItem>
                    Salgados
                  </DropdownItem>
                  </Link>
                  <Link to="/refrigerantes/" style={{textDecoration:'none',color:'grey'}}>
                  <DropdownItem>
                    Refrigerantes
                  </DropdownItem>
                  </Link>
                  <Link to="/pizzas/" style={{textDecoration:'none',color:'grey'}}>
                  <DropdownItem>
                    Pizzas
                  </DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}