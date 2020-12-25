import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class Header extends Component {

    render() {
        return(
            <div>
                <Navbar className="navbar-light bg-light">
                    <NavbarBrand href="/home">
                        <img src="./images/logo.svg" 
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Seven Design Logo" />
                            <span className="font-weight-bold text-success">{this.props.title}</span>
                    </NavbarBrand>
                    
                    <Nav className="mr-auto">
                        <NavItem>
                            <NavLink href="/home" active>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/login" disabled>Design</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/register" disabled>Register</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Header;