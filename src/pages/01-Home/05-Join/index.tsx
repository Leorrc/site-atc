import { Divider2 } from '../../../components/01-Utils/Dividers/styles'
import { SectionDefault } from '../../../components/01-Utils/0-SectionDefault'
import { ContainerGrid } from '../../../components/01-Utils/Containers/ContainerGrid'
import { TitleCenter } from '../../../components/01-Utils/TitleCenter'
import { CardJoin } from '../../../components/01-Utils/CardJoin'

import { Cards } from './styles'

import contentCard from '../../../utils/data/cardJoin.json'

export function Join() {
  return (
    <>
      <Divider2 />
      <SectionDefault padding="0" paddingTop="7rem" paddingBotton="10rem">
        <ContainerGrid>
          <TitleCenter maxWidth="65rem" title="ASSOCIE-SE À ATC-SC EM 2022">
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
