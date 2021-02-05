import React from 'react';
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarText>Simple Text</NavbarText>
        </Navbar>
      </div>
    );
  }
}
