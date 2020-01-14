import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer} from "./Button";
import styled from 'styled-components';
import logo from '../logo.svg';

export class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar dark px-sm-5">
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand" />                   
                </Link>
                <ul className="navbar-nav align-items-center ml-2">
                    <li className="nav-item ml-auto"> 
                        <Link to="/" className="nav-link" style={styles.menuItem}>
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <i className="fas fa-cart-plus"></i>
                       <span></span><span></span>  my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

export default Navbar

let styles= {
    phoneIcon: {
        fontSize: "25px",
        color: "#efc443",
    },
    menuItem: {
        color: "#fff"
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color:var(--mainWhite);
        font-size: 1.3rem;
        text-transform: capitalize !important; 
    }
`


