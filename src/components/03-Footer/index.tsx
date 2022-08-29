import {
  Footer1,
  Container,
  SectionEmail,
  TitleEmail,
  Email,
  SectionInfo,
  Container2,
  Links,
  Link,
  Social,
  Socials
} from './styles'

import logo from '../../images/full/lh.svg'

import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram
} from 'react-icons/ai'
import { Divider2 } from '../01-Utils/Dividers/styles'
import { FaChevronRight } from 'react-icons/fa'

export function Footer() {
  return (
    <>
      <Divider2 />

      <Footer1>
        <SectionEmail>
          <Container>
            <TitleEmail>
              <h2>Cadastrar email</h2>
              <p>Receba a divulgação dos Eventos da ATC-SC</p>
            </TitleEmail>
            <Email>
              <input type="email" name="Digite o email" id="" />
              <input type="submit" value="Cadastrar" />
            </Email>
          </Container>
        </SectionEmail>

        <SectionInfo>
          <Container2>
            <img src={logo} />
            <Links>
              <h4>Links</h4>
              <Link to="/">
                {' '}
                <span>
                  <FaChevronRight />
                </span>
                Home
              </Link>
              <Link to="/events">
                {' '}
                <span>
                  <FaChevronRight />
                </span>
                Eventos
              </Link>
              <Link to="/affiliates">
                {' '}
                <span>
                  <FaChevronRight />
                </span>
                Associados
              </Link>
              <Link to="/parceiros">
                {' '}
                <span>
                  <FaChevronRight />
                </span>
                Parceiros
              </Link>
              <Link to="/leitura">
                {' '}
                <span>
                  <FaChevronRight />
                </span>
                Materiais
              </Link>
            </Links>

            <Socials>
              <h4>Redes Sociais</h4>
              <a
                href="https://www.facebook.com/ATCSantaCatarina"
                target="_blank"
              >
                <AiFillFacebook />
              </a>
              <a href="www.google.com" target="_blank">
                <AiFillInstagram />
              </a>
              <a href="www.google.com" target="_blank">
                <AiFillTwitterCircle />
              </a>
            </Socials>
          </Container2>
          <p>Todos os direitos reservados</p>
          <p>Site ATC-SC 2022</p>
        </SectionInfo>
      </Footer1>
    </>
  )
}
