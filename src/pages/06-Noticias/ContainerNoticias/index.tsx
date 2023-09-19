import { CardMember } from "../../../components/01-Utils/CardMember";
import { Section, Container, SectionBg } from "./styles";

import cardNoticias from "../../../utils/data/cardNoticias.json";
import { TitleCenter } from "../../../components/01-Utils/TitleCenter";

export function ContainerNoticias() {
  return (
    <>
      <SectionBg />
      <Section>
        <Container>
          <TitleCenter
            title="Cantinho das notícias"
            span="2023"
            marginBotton="2rem"
          >
            <p>Aqui serão publicadas notícias e entrevistas.</p>
          </TitleCenter>
          {cardNoticias.map((noticia, i) => (
            <CardMember
              key={i}
              imgUrl={noticia.imgUrl}
              name={noticia.name}
              title={noticia.title}
              description={noticia.description}
              socialList={noticia.socialList}
              som={noticia.som}
            />
          ))}
        </Container>
      </Section>
    </>
  );
}
