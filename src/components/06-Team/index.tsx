import { Divider2 } from '../0-UtilsComps/Dividers/styles'
import { SectionDefault } from '../0-UtilsComps/0-SectionDefault'
import { ContainerGrid } from '../0-UtilsComps/Containers/ContainerGrid'
import { TitleCenter } from '../0-UtilsComps/TitleCenter'
import { CardMember } from '../0-UtilsComps/CardMember'

import { ContainerMember } from './styles'

import cardMember from '../../utils/data/cardMember.json'

export function Team() {
  return (
    <>
      <Divider2 />
      <SectionDefault backgroundColor="var(--body-color)">
        <ContainerGrid grid="row" justifyContent="center">
          <TitleCenter title="DIRETORIA GESTÃO 2022">
            <p>Veja quem faz parte deste time de profissionais</p>
          </TitleCenter>
          <ContainerMember>
            {cardMember.map(member => (
              <CardMember
                imgUrl={member.imgUrl}
                name={member.name}
                title={member.title}
                description={member.description}
                socialList={member.socialList}
              />
            ))}
          </ContainerMember>
        </ContainerGrid>
      </SectionDefault>
    </>
  )
}
