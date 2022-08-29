import { Divider2 } from '../../../components/01-Utils/Dividers/styles'
import { TitleCenter } from '../../../components/01-Utils/TitleCenter'
import { CardMember } from '../../../components/01-Utils/CardMember'

import { ContainerSection, ContainerMember, Container } from './styles'

import cardMember from '../../../utils/data/cardMember.json'

export function Team() {
  return (
    <>
      <Divider2 />
      <ContainerSection>
        <Container>
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
                phone={member.phone}
                email={member.email}
                description={member.description}
                socialList={member.socialList}
              />
            ))}
          </ContainerMember>
        </Container>
      </ContainerSection>
    </>
  )
}
