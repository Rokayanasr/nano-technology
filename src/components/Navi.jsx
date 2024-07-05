import React from "react";

import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link } from "react-router-dom";
function Navi() {
    return (
        <Navbar className='bg-opacity-30 nav-blur md:bg-opacity-20 my-container backdrop-blur-lg bg-white z-20 fixed w-full shadow-lg ring-1 ring-black/5' fluid rounded>
            <NavbarBrand as={Link} href='https://flowbite-react.com'>
                <img src='/favicon.svg' className='mr-3 h-6 sm:h-9' alt='Flowbite React Logo' />
                <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>Flowbite React</span>
            </NavbarBrand>
            <NavbarLink href='#' active>
                    Home
                </NavbarLink>
                <NavbarLink as={Link} href='#'>
                    About
                </NavbarLink>
                <NavbarLink href='#'>Services</NavbarLink>
                <NavbarLink href='#'>Pricing</NavbarLink>
                <NavbarLink href='#'>Contact</NavbarLink>
            <NavbarToggle className="bg-black" />
            <NavbarCollapse>
                <NavbarLink href='#' active>
                    Home
                </NavbarLink>
                <NavbarLink as={Link} href='#'>
                    About
                </NavbarLink>
                <NavbarLink href='#'>Services</NavbarLink>
                <NavbarLink href='#'>Pricing</NavbarLink>
                <NavbarLink href='#'>Contact</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}

export default Navi;
