import { SectionDefault } from '../../../components/01-Utils/0-SectionDefault'
import { ContainerGrid } from '../../../components/01-Utils/Containers/ContainerGrid'
import { TitleCenter } from '../../../components/01-Utils/TitleCenter'

import { ContainerAffi } from './styles'

import cardAffi from '../../../utils/data/cardAffi.json'
import { CardMember } from '../../../components/01-Utils/CardMember'

export function ContainerAffiliates() {
  return (
    <>
      <SectionDefault backgroundColor="var(--body-color)">
        <ContainerGrid grid="row" justifyContent="center">
          <TitleCenter title="ASSOCIADOS DA ATC/SC 2021/2022">
            <p>Encontre um terapeuta associado a nós!</p>
          </TitleCenter>
          <ContainerAffi>
            {cardAffi.map(member => (
              <CardMember
                name={member.name}
                title={member.title}
                description={member.description}
                socialList={member.socialList}
              />
            ))}
          </ContainerAffi>
        </ContainerGrid>
      </SectionDefault>
    </>
  )
}
