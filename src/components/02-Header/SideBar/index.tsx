import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarScroll,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper
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
            <SidebarRoute onClick={toggle} to="/eventos">
              Eventos
            </SidebarRoute>
            <SidebarRoute onClick={toggle} to="/afiliados">
              Encontre um terapeuta
            </SidebarRoute>
            <SidebarRoute onClick={toggle} to="/parceiros">
              Parceiros da ATC
            </SidebarRoute>
            <SidebarRoute onClick={toggle} to="/leitura">
              Materiais
            </SidebarRoute>
            <SidebarRoute onClick={toggle} to="/noticias">
              Cantinho das notícias
            </SidebarRoute>
            <SidebarScroll>
              <a
                href="https://forms.gle/fw8AfpVkhNFcdTRA6"
                target="_blank"
                rel="noreferrer"
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
