import {
  FaQuestion,
  FaCalendarCheck,
  FaChartLine,
  FaChevronRight
} from 'react-icons/fa'

import {
  ContainerSection,
  Container,
  Box,
  Div1,
  Div2,
  Div3,
  Title,
  TitleIcon,
  Ul,
  Scroll
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
              <Ul>
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
              </Ul>
            </Div1>
            <Divider2 />
            <Div2>
              <TitleIcon>
                <i>
                  <FaCalendarCheck />
                </i>
                <h3>O QUE FAZEMOS</h3>
              </TitleIcon>
              <Ul>
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
                <br />
                <li>
                  <span>
                    <FaChevronRight />
                  </span>
                  Para executarmos nossos projetos, é importante divulgar este
                  site e estimular a participação nas nossas programações.
                </li>
              </Ul>
            </Div2>
            <Divider2 />
            <Div3>
              <TitleIcon>
                <i>
                  <FaChartLine />
                </i>
                <h3>POR ISSO </h3>
              </TitleIcon>
              <Ul>
                <li>
                  <span>
                    <FaChevronRight />
                  </span>
                  Portanto, contamos com a colaboração de você, interessado nas
                  Psicoterapias Cognitivas.
                </li>
                <br />
                <li>
                  <span>
                    <FaChevronRight />
                  </span>
                  Gostaríamos que este site seja utilizado por todos.
                </li>
                <br />
                <li>
                  <span>
                    <FaChevronRight />
                  </span>
                  Convidamos você a participar com artigos, troca de
                  experiências, contato conosco e como Associado da ATC-SC.
                </li>
              </Ul>
            </Div3>
            <Scroll to="team">
              <Button>
                <a href="">Saiba mais</a>
              </Button>
            </Scroll>
          </Box>
        </Container>
      </ContainerSection>
    </>
  )
}
