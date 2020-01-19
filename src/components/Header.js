import React from 'react';
import { Navbar, Icon, NavItem } from 'react-materialize';
const Header = () => (
    <Navbar
        alignLinks="left"
        brand={<a className="brand-logo right" href="#">Logo</a>}
        menuIcon={<Icon>menu</Icon>}
        options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
    }}
    >
        <NavItem onClick={function noRefCheck(){}}>
            Contacts <Icon left>person</Icon>
        </NavItem>
        <NavItem href="components.html">
            Campaigns <Icon left>work</Icon>
        </NavItem>
    </Navbar>
);

export default Header;
