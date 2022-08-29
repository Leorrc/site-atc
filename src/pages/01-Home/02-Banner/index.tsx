import { ContainerGrid } from '../../../components/01-Utils/Containers/ContainerGrid'
import Button from '../../../components/01-Utils/Button'

import img from '../../../images/full/hero-img3.png'

import { ContainerSection, Container, DivImage, DivText } from './styles'
import { Divider2 } from '../../../components/01-Utils/Dividers/styles'

export function Banner() {
  return (
    <>
      <ContainerSection>
        <Container>
          <DivImage>
            <img src={img} />
          </DivImage>
          <DivText>
            <h2>
              Bem-Vindo(a) ao site da <span>ATC - SC</span>
            </h2>
            <p>Associação de Terapias Cognitivas do Estado de Santa Catarina</p>
            <Button text="Inscreva-se agora" />
          </DivText>
        </Container>
      </ContainerSection>
      <Divider2 />
    </>
  )
}
