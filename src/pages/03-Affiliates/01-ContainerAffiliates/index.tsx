import { SectionDefault } from '../../../components/01-Utils/0-SectionDefault'
import { ContainerGrid } from '../../../components/01-Utils/Containers/ContainerGrid'
import { CardAffi } from '../../../components/01-Utils/CardAffi'
import { BgAffi } from '../../../components/01-Utils/0-SectionDefault/02-BgAffi'
import cardAffi from '../../../utils/data/cardAffi.json'

import { ContainerAffi, Tittle } from './styles'

export function ContainerAffiliates() {
  return (
    <>
      <BgAffi>
        <Tittle>
          <h3>
            ASSOCIADOS <span>2021/2022</span>
          </h3>
        </Tittle>
      </BgAffi>
      <SectionDefault backgroundColor="var(--body-color)" padding="2rem 0">
        <ContainerGrid grid="row">
          <ContainerAffi>
            {cardAffi.map(affi => (
              <CardAffi
                name={affi.name}
                description={affi.description}
                city={affi.city}
                phone={affi.phone}
                email={affi.email}
                socialList={affi.socialList}
              />
            ))}
          </ContainerAffi>
        </ContainerGrid>
      </SectionDefault>
    </>
  )
}
