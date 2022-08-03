import React, { useState } from "react";
import { FaBars } from 'react-icons/fa'
import { 
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from "./styles";

type Props = {
  toggle: () => void
}

export function NavBar({toggle}: Props) {


  return (
    <>
      <Nav>
        <NavbarContainer >
          <NavLogo to='/'><img src="" alt="" /></NavLogo>
          <MobileIcon onClick={toggle} >
            <FaBars />
          </MobileIcon >
          <NavMenu>
            <NavItem>
              <NavLinks to='/'>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='sobrenós'>Sobre nós</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/events'>Eventos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='Encontre um terapeuta'>Encontre um terapeuta</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='Parceiros da ATC'>Parceiros da ATC</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='Materiais/Links'>Materiais/Links</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}







