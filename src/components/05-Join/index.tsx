import { Divider2 } from '../0-UtilsComps/Dividers/styles'
import { SectionDefault } from '../0-UtilsComps/0-SectionDefault'
import { ContainerGrid } from '../0-UtilsComps/ContainerGrid'
import { TitleCenter } from '../0-UtilsComps/TitleCenter'

import { CardJoin } from '../0-UtilsComps/Card'

import { Cards } from './styles'

export function Join() {
  return (
    <>
      <Divider2 />
      <SectionDefault>
        <ContainerGrid>
          <TitleCenter title="ASSOCIE-SE À ATC-SC EM 2022">
            <p>
              Podem associar-se à Associação de Terapias Cognitivas do Estado de
              Santa Catarina os(as) Psicólogos(as), Psiquiatras e estudantes das
              graduações de Psicologia e Medicina, com domicílio ou atuação no
              Estado de Santa Catarina. Vantagens em associar-se à ATC/SC:
            </p>
          </TitleCenter>

          <Cards>
            <CardJoin
              title="Vantagens de ser associado:"
              ul=""
              li0="- Descontos nos eventos organizados ou apoiados pela ATC/SC"
              li1="- Acesso às seções do website exclusivas para sócios"
              li2="- Possibilidade de participação em cursos e eventos oferecidos ou apoiados pela ATC/SC"
            />
            <CardJoin
              title="Valor da associação por categoria:"
              ul=""
              li0="- Profissional R$ 90,00"
              li1="- Estudante de Pós-Graduação R$ 70,00"
              li2="- Estudante de Graduação R$ 50,00"
            ></CardJoin>
            <CardJoin
              title="Vantagens de ser associado:"
              ul=""
              li0="- Fazer parte da nossa lista de Associados neste nosso site"
              li1="- Fazer parte de uma comunidade que troca informações e está em constante atualização"
              li2="- Ter a oportunidade de tirar dúvidas com especialistas"
            />
          </Cards>
        </ContainerGrid>
      </SectionDefault>
    </>
  )
}
