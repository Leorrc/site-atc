import React, { useState } from 'react'
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
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
            <SidebarLink onClick={toggle} to="/">
              Home
            </SidebarLink>
            <SidebarLink onClick={toggle} to="#teste">
              sobrenós
            </SidebarLink>
            <SidebarLink onClick={toggle} to="Eventos">
              Eventos
            </SidebarLink>
            <SidebarLink onClick={toggle} to="/affiliates">
              Encontre um terapeuta
            </SidebarLink>
            <SidebarLink onClick={toggle} to="/parceiros">
              Parceiros da ATC
            </SidebarLink>
            <SidebarLink onClick={toggle} to="teste">
              teste
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}
