import React, { useState } from 'react'
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarScroll,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap
} from './SideBarElements'

type Props = {
  isOpen: boolean
  toggle: () => void
}

export function SideBar({ isOpen, toggle }: Props) {
  return (
    <>
      <SidebarContainer
        isOpen={isOpen}
        onClick={() => {
          isOpen && toggle()
        }}
      >
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarRoute onClick={toggle} to="/">
              Home
            </SidebarRoute>
            <SidebarRoute onClick={toggle} to="/events">
              Eventos
            </SidebarRoute>
            <SidebarRoute onClick={toggle} to="/affiliates">
              Encontre um terapeuta
            </SidebarRoute>
            <SidebarRoute onClick={toggle} to="/parceiros">
              Parceiros da ATC
            </SidebarRoute>
            <SidebarRoute onClick={toggle} to="/leitura">
              Materiais
            </SidebarRoute>
            <SidebarScroll>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScKF3mjS4fIwIo2CEBjssFwoNfBSRY647jYoF-xoAg5FK3n0w/viewform"
                target="blank"
              >
                Associar-se
              </a>
            </SidebarScroll>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}
