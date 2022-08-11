import { Divider2 } from '../../../components/01-Utils/Dividers/styles'
import { SectionDefault } from '../../../components/01-Utils/0-SectionDefault'
import { ContainerGrid } from '../../../components/01-Utils/Containers/ContainerGrid'
import { TitleCenter } from '../../../components/01-Utils/TitleCenter'

import { ContainerText, ButtonAbout, DivButton } from './styles'
import { Bg } from '../../../components/01-Utils/0-SectionDefault/01-Bg'

export function About() {
  return (
    <>
      <Divider2 />
      <Bg>
        <SectionDefault padding="7rem 0">
          <ContainerGrid grid="row" justifyContent="center" id="about">
            <ContainerText>
              <TitleCenter title="Sobre Nós" paddingBotton="1.875rem" />
              <h3>
                Este é o site da Associação de Terapias Cognitivas do{' '}
                <span>Estado de Santa Catarina (ATC-SC).</span>
              </h3>{' '}
              <ul>
                <li>
                  A ATC-SC é uma entidade sem fins lucrativos que representa a
                  FBTC (Federação Brasileira de Terapias Cognitivas) em Santa
                  Catarina.
                </li>{' '}
                <li>
                  Objetiva divulgar as PSICOTERAPIAS COGNITIVAS e favorecer a
                  troca e qualificação entre interessados nesta abordagem
                  terapêutica em nosso estado.
                </li>{' '}
                <li>
                  Para executarmos nossos projetos, é importante divulgar este
                  site e estimular a participação nas nossas programações.
                </li>{' '}
                <li>
                  Portanto, contamos com a colaboração de você, interessado nas
                  Psicoterapias Cognitivas. Gostaríamos que este site seja
                  utilizado por todos.
                </li>{' '}
                <li>
                  Convidamos você a participar com artigos, troca de
                  experiências, contato conosco e como Associado da ATC-SC.
                </li>{' '}
              </ul>
              <p>Diretoria Gestão 2022</p>
              <DivButton>
                <ButtonAbout
                  to="team"
                  spy={true}
                  smooth={true}
                  offset={-240}
                  duration={300}
                >
                  SABER MAIS
                </ButtonAbout>
              </DivButton>
            </ContainerText>
          </ContainerGrid>
        </SectionDefault>
      </Bg>
    </>
  )
}
