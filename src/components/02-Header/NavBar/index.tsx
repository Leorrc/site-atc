import React, { useState } from 'react'
import { Link as LinkS } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'
import { useLocation } from 'react-router-dom'

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
    scroll.scrollToTop({
      delay: 1
    })
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
              {useLocation().pathname === '/' ? (
                <NavLinks2 to="about" offset={-120} duration={300}>
                  Sobre nós
                </NavLinks2>
              ) : (
                <NavLinks to="/">Sobre nós</NavLinks>
              )}
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
              <NavLinks to="/leitura">Materiais/Links</NavLinks>
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
