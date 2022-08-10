import { Divider2 } from '../01-Utils/Dividers/styles'
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram
} from 'react-icons/ai'

import {
  FooterDefault,
  ContainerGridFooter,
  BoxEmail,
  FormEmail,
  DivLinks,
  DivUl,
  ListMe,
  DivRedeSociais,
  DivText,
  DivSocial,
  ContainerButton,
  Copyright
} from './styles'

type Props = {
  toggle: () => void
}

export function Footer() {
  return (
    <>
      <Divider2 />
      <FooterDefault>
        <ContainerGridFooter>
          <BoxEmail>
            <h4>CADASTRAR EMAIL</h4>
            <p>Receba a divulgação dos Eventos da ATC-SC</p>
            <FormEmail>
              <input type="email" name="email" />
              <input type="submit" value="Inscreva-se" />
            </FormEmail>
          </BoxEmail>

          <DivLinks>
            <h4>Todos nossos Links</h4>
            <DivUl>
              <ListMe to="/">Home</ListMe>
              <ListMe to="sobrenós">Sobre nós</ListMe>
              <ListMe to="Eventos">Eventos</ListMe>
              <ListMe to="Encontre um terapeuta">Encontre um terapeuta</ListMe>
              <ListMe to="/parceiros">Parceiros da ATC</ListMe>
            </DivUl>
          </DivLinks>

          <DivRedeSociais>
            <DivText>
              <h4>Nas redes sociais</h4>
              <p>Todas as nossas redes sociais.</p>
            </DivText>
            <DivSocial>
              <a href="">
                <AiFillTwitterCircle />
              </a>
              <a href="">
                <AiFillFacebook />
              </a>
              <a href="">
                <AiFillInstagram />
              </a>
              <a href="">
                <AiFillTwitterCircle />
              </a>
            </DivSocial>
          </DivRedeSociais>
        </ContainerGridFooter>
      </FooterDefault>

      <ContainerButton>
        <Copyright>
          <h5>
            @2022 Site desenvoldido por LeoCarvalho.DEV Todos os direitos
            reservados.
          </h5>
        </Copyright>
      </ContainerButton>
    </>
  )
}
