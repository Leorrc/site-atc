import { Divider2 } from '../0-UtilsComps/Dividers/styles'

import {
  ContainerFooter,
  FooterLinks,
  FooterLinksContainer,
  FooterLinksRow,
  RowLogo,
  RowLinks,
  MenuLinks,
  ListMe,
  RowSocial,
  SocialLinks,
  Copyright,
  FooterBottom,
  Email,
  ContainerEmail,
  BoxEmail,
  FormEmail
} from './styles'

type Props = {
  toggle: () => void
}

export function Footer() {
  return (
    <>
      <ContainerFooter>
        <Divider2 />
        <Email>
          <ContainerEmail>
            <BoxEmail>
              <h4>CADASTRAR EMAIL</h4>
              <p>Receba a divulgação dos Eventos da ATC-SC</p>
              <FormEmail>
                <input type="email" name="email" />
                <input type="submit" value="Inscreva-se" />
              </FormEmail>
            </BoxEmail>
          </ContainerEmail>
        </Email>

        <Divider2 />

        <FooterLinks>
          <FooterLinksContainer>
            <FooterLinksRow>
              <RowLogo>
                <h4>ATC-SC</h4>
              </RowLogo>
              <RowLinks>
                <h4>Todos os Links</h4>
                <MenuLinks>
                  <ListMe to="/">Home</ListMe>
                  <ListMe to="sobrenós">Sobre nós</ListMe>
                  <ListMe to="Eventos">Eventos</ListMe>
                  <ListMe to="Encontre um terapeuta">
                    Encontre um terapeuta
                  </ListMe>
                  <ListMe to="Parceiros da ATC">Parceiros da ATC</ListMe>
                </MenuLinks>
              </RowLinks>
              <RowSocial>
                <h4>Nas redes sociais</h4>
                <p>Todas as nossas redes sociais</p>
                <SocialLinks></SocialLinks>
              </RowSocial>
            </FooterLinksRow>
          </FooterLinksContainer>
        </FooterLinks>

        <FooterBottom>
          <Copyright>
            @2022 Site Desenvolvido por <span>LeoCarvalho.DEV</span>
          </Copyright>
        </FooterBottom>
      </ContainerFooter>
    </>
  )
}
