import {
  FaQuestion,
  FaCalendarCheck,
  FaChartLine,
  FaChevronRight,
  FaExternalLinkAlt
} from 'react-icons/fa'

import {
  ContainerSection,
  Container,
  Box,
  Div1,
  Div2,
  Title,
  TitleIcon,
  Scroll,
  TitleIcon2
} from './styles'

import { Divider2 } from '../../../components/01-Utils/Dividers/styles'
import Button from '../../../components/01-Utils/Button'

export function About() {
  return (
    <>
      <ContainerSection>
        <Container>
          <Box>
            <Title>
              <h2>Sobre Nós</h2>
              <h4>
                Este é o site da Associação de Terapias Cognitivas do
                <br />
                <span> Estado de Santa Catarina (ATC-SC)</span>
              </h4>
            </Title>
            <Divider2 />
            <Div1>
              <TitleIcon>
                <i>
                  <FaQuestion />
                </i>
                <h3>QUEM SOMOS</h3>
              </TitleIcon>
              <ul>
                <li>
                  <span>
                    <FaChevronRight />
                  </span>
                  Associação de Terapias Cognitivas do Estado de Santa Catarina
                  caracteriza-se por ser uma associação estadual dos
                  profissionais e estudantes que se dedicam ao estudo e à
                  prática das diferentes abordagens das Terapias Cognitivas e
                  Contextuais no estado de Santa Catarina.
                </li>
              </ul>
            </Div1>
            <Divider2 />
            <Div2>
              <TitleIcon2>
                <i>
                  <FaCalendarCheck />
                </i>
                <h3>O QUE FAZEMOS</h3>
              </TitleIcon2>
              <ul>
                <li>
                  <span>
                    <FaChevronRight />
                  </span>
                  Além de ter como objetivo a divulgação das psicoterapias
                  cognitivas, a ATC tem como propósito o favorecimento, a troca
                  e a qualificação entre interessados nesta abordagem
                  terapêutica em nosso Estado. O associado tem a oportunidade de
                  se inserir em um grupo com profissionais da mesma área
                  possibilitando constante atualização e troca de informações.
                </li>

                <li>
                  <span>
                    <FaChevronRight />
                  </span>
                  Para executarmos nossos projetos, é importante divulgar este
                  site e estimular a participação nas nossas programações.
                </li>
              </ul>
            </Div2>
            <Divider2 />
            <Div1>
              <TitleIcon>
                <i>
                  <FaChartLine />
                </i>
                <h3>POR ISSO </h3>
              </TitleIcon>
              <ul>
                <li>
                  <span>
                    <FaChevronRight />
                  </span>
                  Sobre os nossos projetos, você pode acompanhar as programações
                  diretamente por este site ou pelo nosso canal do instagram{' '}
                  <a href="https://www.instagram.com/atc_sc/" target="blank">
                    @atc_sc
                  </a>{' '}
                  <FaExternalLinkAlt />
                </li>

                <li>
                  <span>
                    <FaChevronRight />
                  </span>
                  Convidamos você a participar com artigos, trocas de
                  experiências e demais interações como associado da ATC- SC.
                </li>
              </ul>
            </Div1>
            <Divider2 />
            <Scroll to="team">
              <Button>
                <a>Saiba mais</a>
              </Button>
            </Scroll>
          </Box>
        </Container>
      </ContainerSection>
    </>
  )
}
