import { NavContainer } from './styles'
import Links from '../Links';
import Logo from '../Logo'

const links = [
  {
    title: 'link-01',
    url: 'link-01'
  },
  {
    title: 'link-02',
    url: 'link-02'
  },
  {
    title: 'link-03',
    url: 'link-03'
  },
  {
    title: 'link-04',
    url: 'link-04'
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