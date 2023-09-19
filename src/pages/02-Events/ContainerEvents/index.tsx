import { TitleCenter } from "../../../components/01-Utils/TitleCenter";
import { Section, Container, SectionBg } from "./styles";

export function ContainerEvents() {
  return (
    <>
      <SectionBg />
      <Section>
        <Container>
          <TitleCenter
            title="Eventos da ATC-SC"
            span="2023"
            marginBotton="2rem"
          >
            <p>Aqui serão publicados nossos eventos.</p>
          </TitleCenter>

        </Container>
      </Section>
    </>
  )
}
