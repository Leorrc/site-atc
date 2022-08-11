import { SectionDefault } from '../../../components/01-Utils/0-SectionDefault'

import { ContainerGrid } from '../../../components/01-Utils/Containers/ContainerGrid'
import Button from '../../../components/01-Utils/Button'
import img from '../../../images/full/hero-img3.png'

import { DivImage, DivText } from './styles'

export function Banner() {
  return (
    <>
      <SectionDefault padding="0" paddingTop="18rem" paddingBotton="10rem">
        <ContainerGrid grid="column">
          <DivImage>
            <img src={img} />
          </DivImage>
          <DivText>
            <h1>
              Bem-Vindo(a) ao site da <span>ATC-SC</span>
            </h1>
            <p>Associação de Terapias Cognitivas do Estado de Santa Catarina</p>
            <Button text="Inscreva-se agora" />
          </DivText>
        </ContainerGrid>
      </SectionDefault>
    </>
  )
}
