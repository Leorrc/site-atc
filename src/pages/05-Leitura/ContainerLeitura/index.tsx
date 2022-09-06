import { Book } from '../../../components/01-Utils/Books'
import {
  Section,
  Container,
  ContainerBook,
  ContainerLink,
  SectionBg
} from './styles'

import cardBook from '../../../utils/data/cardBook.json'
import cardLink from '../../../utils/data/cardLink.json'
import { TitleCenter } from '../../../components/01-Utils/TitleCenter'
import { Sites } from '../../../components/01-Utils/Sites'

export function ContainerLeitura() {
  return (
    <>
      <SectionBg />
      <Section>
        <Container>
          <TitleCenter title="LEITURAS SUGERIDAS">
            <p>Livros surgeridos</p>
          </TitleCenter>
          <ContainerBook>
            {cardBook.map(book => (
              <Book content={book.content} author={book.author} />
            ))}
          </ContainerBook>
          <TitleCenter title="LINKS ÚTEIS" />
          <ContainerLink>
            {cardLink.map(link => (
              <Sites name={link.name} link={link.link} />
            ))}
          </ContainerLink>
        </Container>
      </Section>
    </>
  )
}
