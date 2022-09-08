import { FaBars } from 'react-icons/fa'
import {
  ContainerHeader,
  Nav,
  Menu,
  MobileIcon,
  Item,
  ItemLink,
  LogoA,
  Wrapper
} from './styles'

import logo from '../../../images/full/lh.svg'

type Props = {
  toggle1: () => void
}

export function NavBar({ toggle1 }: Props) {
  return (
    <>
      <ContainerHeader>
        <Nav>
          <LogoA to="/">
            <img src={logo} />
          </LogoA>
          <MobileIcon onClick={toggle1}>
            <FaBars />
          </MobileIcon>
          <Menu>
            <Item>
              <ItemLink to="/">Home</ItemLink>
            </Item>
            <Item>
              <ItemLink to="/events">Eventos</ItemLink>
            </Item>
            <Item>
              <ItemLink to="/affiliates">Encontre um terapeuta</ItemLink>
            </Item>
            <Item>
              <ItemLink to="/parceiros">Parceiros da ATC</ItemLink>
            </Item>
            <Item>
              <ItemLink to="/leitura">Materiais</ItemLink>
            </Item>
          </Menu>
          <Wrapper>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScKF3mjS4fIwIo2CEBjssFwoNfBSRY647jYoF-xoAg5FK3n0w/viewform"
              target="_blank"
              rel="noreferrer"
            >
              <span>Associar-se</span>
            </a>
          </Wrapper>
        </Nav>
      </ContainerHeader>
    </>
  )
}
