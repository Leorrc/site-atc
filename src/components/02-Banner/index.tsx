import { SectionDefault } from '../0-UtilsComps/0-SectionDefault'

import { ContainerGrid } from '../0-UtilsComps/ContainerGrid'
import Button from '../0-UtilsComps/Button'
import img from '../../images/hero-img.png'

import { DivImage, DivText } from './styles'

export function Banner() {
  return (
    <>
      <SectionDefault>
        <ContainerGrid grid="column">
          <DivImage>
            <img src={img} />
          </DivImage>
          <DivText>
            <h1>Bem-Vindo(a) ao site da ATC-SC</h1>
            <p>Associação de Terapias Cognitivas do Estado de Santa Catarina</p>
            <Button text="Inscreva-se agora" />
          </DivText>
        </ContainerGrid>
      </SectionDefault>
    </>
  )
}
