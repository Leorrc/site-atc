import { NavContainer } from './styles'
import Links from '../Links';
import Logo from '../Logo'

const links = [
  {
    title: 'Início',
    url: 'https://psicologamariaveronica.com.br/'
  },
  {
    title: 'Sobre nós',
    url: 'link-02'
  },
  {
    title: 'Eventos',
    url: 'link-03'
  },
  {
    title: 'Encontre um terapeuta',
    url: 'link-04'
  },
  {
    title: 'Parceiros da ATC',
    url: 'link-05'
  },
  {
    title: 'Materiais/Links',
    url: 'link-06'
  },
]

function NavBar() {
  return (
    <NavContainer>
      <Logo />
      <Links links={links} />
    </NavContainer>
  );
}

export default NavBar;