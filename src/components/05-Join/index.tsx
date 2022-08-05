import { Divider2 } from '../0-UtilsComps/Dividers/styles'
import { SectionDefault } from '../0-UtilsComps/0-SectionDefault'
import { ContainerGrid } from '../0-UtilsComps/Containers/ContainerGrid'
import { TitleCenter } from '../0-UtilsComps/TitleCenter'
import { CardJoin } from '../0-UtilsComps/CardJoin'

import { Cards } from './styles'

import contentCard from '../../utils/data/cardJoin.json'

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
            {contentCard.map(content => (
              <CardJoin
                title={content.title}
                descriptionList={content.descriptionList}
                buttonText={content.button?.text}
              />
            ))}
          </Cards>
        </ContainerGrid>
      </SectionDefault>
    </>
  )
}
