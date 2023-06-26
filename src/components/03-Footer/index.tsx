import { useLocation } from "react-router-dom";
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
  Socials,
  Scroll,
  Container3,
} from "./styles";

import {
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { Divider2 } from "../01-Utils/Dividers/styles";
import { FaChevronRight } from "react-icons/fa";
import { Contact } from "./Contact";

import logo from "../../images/full/logo2.svg";

export function Footer() {
  const { pathname } = useLocation();

  return (
    <>
      <Divider2 />
      <Footer1>
        <Contact />
        <SectionEmail>
          <Container>
            <TitleEmail>
              <h2>Cadastrar e-mail</h2>
              <p>Receba a divulgação dos Eventos da ATC-SC</p>
            </TitleEmail>
            <Email
              action="https://formsubmit.co/atcscbr@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="email" name="Digite o email" />
              <input type="submit" value="Cadastrar" />
            </Email>
          </Container>
        </SectionEmail>

        <SectionInfo>
          <Container2>
            <img src={logo} alt="logo" />

            <Links>
              <h4>Links</h4>
              {pathname === "/" ? (
                <Scroll to="hometop">
                  <span>
                    <FaChevronRight />
                  </span>
                  Home
                </Scroll>
              ) : (
                <Link to="/">
                  <span>
                    <FaChevronRight />
                  </span>
                  Home
                </Link>
              )}
              <Link to="/events">
                <span>
                  <FaChevronRight />
                </span>
                Eventos
              </Link>
              <Link to="/affiliates">
                <span>
                  <FaChevronRight />
                </span>
                Associados
              </Link>
              <Link to="/parceiros">
                {" "}
                <span>
                  <FaChevronRight />
                </span>
                Parceiros
              </Link>
              <Link to="/leitura">
                {" "}
                <span>
                  <FaChevronRight />
                </span>
                Materiais
              </Link>
              <Link to="/politica-de-privacidade">
                <span>
                  <FaChevronRight />
                </span>
                Política de Privacidade
              </Link>
              <Link to="/politica-de-privacidade">
                <span>
                  <FaChevronRight />
                </span>
                Termos de Uso
              </Link>
            </Links>
            <Socials>
              <h3>Redes Sociais</h3>
              <Social>
                <a
                  href="https://www.facebook.com/ATCSantaCatarina"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillFacebook />
                </a>
                <a
                  href="https://www.instagram.com/atc_sc/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </Social>
            </Socials>
          </Container2>
        </SectionInfo>
        <Container3>
          <span>Design e Desenvolvimento por</span>
          <br />
          <a
            href="https://leocarvalhodev.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            Leonardo Carvalho DEV
          </a>{" "}
          <span>2023</span>
        </Container3>
      </Footer1>
    </>
  );
}