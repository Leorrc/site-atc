import Button from '../../../components/01-Utils/Button'

import img from '../../../images/full/hero-img3.png'

import { ContainerSection, Container, DivImage, DivText } from './styles'
import { Divider2 } from '../../../components/01-Utils/Dividers/styles'

export function Banner() {
  return (
    <>
      <ContainerSection id="hometop">
        <Container>
          <DivImage>
            <img src={img} />
          </DivImage>
          <DivText>
            <h1>
              Bem-Vindo(a) ao site da <span>ATC - SC</span>
            </h1>
            <p>Associação de Terapias Cognitivas do Estado de Santa Catarina</p>
            <Button>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScKF3mjS4fIwIo2CEBjssFwoNfBSRY647jYoF-xoAg5FK3n0w/viewform"
                target="_blank"
              >
                Inscreva-se agora
              </a>
            </Button>
          </DivText>
        </Container>
      </ContainerSection>
      <Divider2 />
    </>
  )
}
