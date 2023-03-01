import { useLocation } from 'react-router-dom'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import emailNews from '../../utils/data/emailNews'

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
} from './styles'

import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from 'react-icons/ai'
import { Divider2 } from '../01-Utils/Dividers/styles'
import { FaChevronRight } from 'react-icons/fa'
import { Contact } from './Contact'

import logo from '../../images/full/logo2.svg'

export function Footer() {
  const { pathname } = useLocation()

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState('')

  const sendEmail = () => {
    const emailObj = {
      email,
    }

    emailjs
      .send(
        emailNews.USER_ID,
        emailNews.TEMPLATE_ID,
        emailObj,
        emailNews.PUBLIC_KEY,
      )
      .then(
        result => {
          setEmail('')
        },
        error => {
          console.log(error.text)
        },
      )
  }
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
            <Email>
              <input
                onChange={e => {
                  setEmail(e.target.value)
                }}
                value={email}
                type="email"
                name="Digite o email"
              />
              <input onClick={sendEmail} type="submit" value="Cadastrar" />
            </Email>
          </Container>
        </SectionEmail>

        <SectionInfo>
          <Container2>
            <img src={logo} />
            <Links>
              <h4>Links</h4>
              {pathname === '/' ? (
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
              <h3>Redes Sociais</h3>
              <Social>
                <a
                  href="https://www.facebook.com/ATCSantaCatarina"
                  target="_blank"
                  rel="noreferrer">
                  <AiFillFacebook />
                </a>
                <a
                  href="https://www.instagram.com/atc_sc/"
                  target="_blank"
                  rel="noreferrer">
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
            rel="noreferrer">
            Leonardo Carvalho DEV
          </a>{' '}
          <span>2023</span>
        </Container3>
      </Footer1>
    </>
  )
}
