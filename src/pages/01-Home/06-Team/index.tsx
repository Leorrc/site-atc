import { Divider2 } from '../../../components/01-Utils/Dividers/styles'
import { SectionDefault } from '../../../components/01-Utils/0-SectionDefault'
import { ContainerGrid } from '../../../components/01-Utils/Containers/ContainerGrid'
import { TitleCenter } from '../../../components/01-Utils/TitleCenter'
import { CardMember } from '../../../components/01-Utils/CardMember'

import { ContainerMember } from './styles'

import cardMember from '../../../utils/data/cardMember.json'

export function Team() {
  return (
    <>
      <Divider2 />
      <SectionDefault
        padding="0"
        paddingTop="7rem"
        paddingBotton="10rem"
        backgroundColor="var(--body-color)"
      >
        <ContainerGrid grid="row" justifyContent="center" id="team">
          <TitleCenter title="DIRETORIA GESTÃO 2022">
            <p>Veja quem faz parte deste time de profissionais</p>
          </TitleCenter>
          <ContainerMember>
            {cardMember.map(member => (
              <CardMember
                imgUrl={member.imgUrl}
                name={member.name}
                title={member.title}
                city={member.city}
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
