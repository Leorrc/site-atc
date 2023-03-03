import cardAffi from '../../../utils/data/cardAffi.json'

import {
  Container,
  ContainerSection,
  Tittle,
  SectionBg,
  ContainerMember,
} from './styles'
import { CardMember } from '../../../components/01-Utils/CardMember'

export function ContainerAffiliates() {
  return (
    <>
      <SectionBg />

      <ContainerSection>
        <Tittle>
          <h2>
            ASSOCIADOS <span>2022/2023</span>
          </h2>
        </Tittle>
        <Container>
          <ContainerMember>
            {cardAffi.map(member => (
              <CardMember
                name={member.name}
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
