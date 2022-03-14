import React from 'react';
import { Nav, NavLink, NavIcon, Bars} from './NavbarElements';

const Navbar = ({ toggle }) => {
    return(
        <>
        <Nav>
            <NavLink to='/'> Kathmandu Motorcycle Rental Service</NavLink>
            <NavIcon onClick={toggle}>
                <p>sign in</p>
                <p>Menu</p>
                <Bars />
            </NavIcon>
        </Nav>
        </>
    );
};

export default Navbar;