import React from 'react';
import { SideNav, SideNavItem, Button, Icon } from 'react-materialize';
const Aside = () => (
    <SideNav
    fixed
    className="aside-nav" >
        <Button large node="a" waves="light" className="top-aside-button"><Icon>add</Icon> Create Contact</Button>
        <SideNavItem
            href="#!icon"
            icon="person_outline" >
            All Contacts
        </SideNavItem>
        <SideNavItem divider />
        <SideNavItem href="#!second">
            Groups
        </SideNavItem>
        <SideNavItem
            href="#!third"
            waves >
            Tags
        </SideNavItem>
    </SideNav>
);

export default Aside;
