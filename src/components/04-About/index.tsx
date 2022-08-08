import { Divider2 } from '../0-UtilsComps/Dividers/styles'
import { SectionDefault } from '../0-UtilsComps/0-SectionDefault'
import { ContainerGrid } from '../0-UtilsComps/Containers/ContainerGrid'
import { TitleCenter } from '../0-UtilsComps/TitleCenter'
import Button from '../0-UtilsComps/Button'

import { DivPs, DivP1, DivP2 } from './styles'

export function About() {
  return (
    <>
      <Divider2 />
      <SectionDefault>
        <ContainerGrid grid="row" justifyContent="center">
          <TitleCenter title="Sobre Nós" />
          <DivPs>
            <DivP1>
              <p>
                Este é o site da Associação de Terapias Cognitivas do Estado de
                Santa Catarina (ATC-SC).
              </p>
              <br />
              <ul>
                <li>
                  A ATC-SC é uma entidade sem fins lucrativos que representa a
                  FBTC (Federação Brasileira de Terapias Cognitivas) em Santa
                  Catarina.
                </li>
                <br />
                <li>
                  Objetiva divulgar as PSICOTERAPIAS COGNITIVAS e favorecer a
                  troca e qualificação entre interessados nesta abordagem
                  terapêutica em nosso estado.
                </li>
                <br />
                <li>
                  Para executarmos nossos projetos, é importante divulgar este
                  site e estimular a participação nas nossas programações.
                </li>
                <br />
              </ul>
            </DivP1>
            <DivP2>
              <p>
                Portanto, contamos com a colaboração de você, interessado nas
                Psicoterapias Cognitivas. Gostaríamos que este site seja
                utilizado por todos.
              </p>{' '}
              <br />
              <p>
                Convidamos você a participar com artigos, troca de experiências,
                contato conosco e como Associado da ATC-SC.
              </p>{' '}
              <br />
              <span>Diretoria Gestão 2022</span> <br />
              <Button text="Saber Mais" />
            </DivP2>
          </DivPs>
        </ContainerGrid>
      </SectionDefault>
    </>
  )
}
