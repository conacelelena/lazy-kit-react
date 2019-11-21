import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar,
  NavItem,
  NavLink,
  Container,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ExampleNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    let navItems = this.props.navItems.map((item, index) => {
      return (
        <NavItem>
          <NavLink href="/">
            <FontAwesomeIcon icon={item.icon} /> {" "}
            {item.name}
          </NavLink>
        </NavItem>
      );
    })
    return (
      <Navbar expand="lg" dark={this.props.dark} light={this.props.light} className={`${this.props.bg} mb-4`}>
        <Container>
          <NavbarBrand href="/">
            <img className="mr-2" style={{height: 30}} src={require(`./../../../assets/img/${this.props.logo}`)} alt="logo" />
            {this.props.name}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-lg-auto" navbar>
              {navItems}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
};

ExampleNavbar.propType = {
  logo: PropTypes.string,
  name: PropTypes.string,
  bg: PropTypes.string,
  navItems: PropTypes.array,
  dark: PropTypes.bool,
  light: PropTypes.bool
};

ExampleNavbar.defaultProps = {
  logo: "logo.svg",
  name: "Lazy Kit",
  bg: "bg-primary",
  navItems: [],
  dark: true,
  light: false
};


export default ExampleNavbar;
