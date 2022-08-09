import React, { useState } from 'react'
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
} from './styles'

import logo from '../../../images/logosParceiros/logo1.svg'

type Props = {
  toggle: () => void
}

export function NavBar({ toggle }: Props) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img src={logo} />
          </NavLogo>

          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="#teste">Sobre nós</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/events">Eventos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/affiliates">Encontre um terapeuta</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/parceiros">Parceiros da ATC</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Materiais/Links">Materiais/Links</NavLinks>
            </NavItem>
          </NavMenu>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    </>
  )
}
