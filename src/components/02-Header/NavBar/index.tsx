import React, { useState } from 'react'
import { Link as LinkS } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'

import { FaBars } from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinks2
} from './styles'

import logo from '../../../images/logosParceiros/logo1.svg'

type Props = {
  toggle1: () => void
}

export function NavBar({ toggle1 }: Props) {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <img src={logo} />
          </NavLogo>

          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks2
                to="about"
                spy={true}
                smooth={true}
                offset={-240}
                duration={300}
              >
                Sobre nós
              </NavLinks2>
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

          <MobileIcon onClick={toggle1}>
            <FaBars />
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    </>
  )
}
