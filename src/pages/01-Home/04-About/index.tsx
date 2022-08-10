import { Divider2 } from '../../../components/01-Utils/Dividers/styles'
import { SectionDefault } from '../../../components/01-Utils/0-SectionDefault'
import { ContainerGrid } from '../../../components/01-Utils/Containers/ContainerGrid'
import { TitleCenter } from '../../../components/01-Utils/TitleCenter'

import { DivPs, DivP1, DivP2, ButtonAbout, DivButton } from './styles'

export function About() {
  return (
    <>
      <Divider2 />
      <SectionDefault padding="4rem 0">
        <ContainerGrid grid="row" justifyContent="center" id="about">
          <TitleCenter title="Sobre Nós" paddingBotton="1.875rem" />
        </ContainerGrid>
      </SectionDefault>
    </>
  )
}

{
  /* <SectionDefault>
<ContainerGrid grid="row" justifyContent="center" id="about">
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
    </DivP2>
  </DivPs>
</ContainerGrid>
</SectionDefault> */
}
