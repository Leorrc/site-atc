import { SectionDefault } from '../0-UtilsComps/0-SectionDefault'
import { ContainerGrid } from '../0-UtilsComps/Containers/ContainerGrid'
import { TitleCenter } from '../0-UtilsComps/TitleCenter'

import { ContainerAffi } from './styles'

import cardAffi from '../../utils/data/cardAffi.json'
import { CardMember } from '../0-UtilsComps/CardMember'

export function ComponenteDoAffiliates() {
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
