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
  Ul
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
                <span> Estado de Santa Catarina (ATC-SC)</span> .
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
                  A ATC-SC é uma entidade sem fins lucrativos que representa a
                  FBTC (Federação Brasileira de Terapias Cognitivas) em Santa
                  Catarina.
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
                  Objetiva divulgar as PSICOTERAPIAS COGNITIVAS e favorecer a
                  troca e qualificação entre interessados nesta abordagem
                  terapêutica em nosso estado.
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
            <Button text="Saiba mais" />
          </Box>
        </Container>
      </ContainerSection>
    </>
  )
}
