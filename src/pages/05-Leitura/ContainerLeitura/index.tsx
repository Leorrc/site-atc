import { Book } from '../../../components/01-Utils/Books'
import {
  Section,
  Container,
  ContainerBook,
  ContainerLink,
  SectionBg
} from './styles'

import newBooks from '../../../utils/data/newBooks.json'
import cardBook from '../../../utils/data/cardBook.json'
import cardLink from '../../../utils/data/cardLink.json'
import { TitleCenter } from '../../../components/01-Utils/TitleCenter'
import { Sites } from '../../../components/01-Utils/Sites'
import { NewBooks1 } from '../../../components/01-Utils/NewBooks'

export function ContainerLeitura() {
  return (
    <>
      <SectionBg />
      <Section>
        <Container>
          <div className="title1">
            <TitleCenter title="LIVROS ESCRITOS PELOS ASSOCIADOS" />
          </div>
          <ContainerBook>
            {newBooks.map(newBooks => (
              <NewBooks1
                content={newBooks.content}
                author={newBooks.author}
                link={newBooks.link}
              />
            ))}
          </ContainerBook>
          <TitleCenter title="LEITURAS SUGERIDAS" />
          <ContainerBook>
            {cardBook.map(book => (
              <NewBooks1
                content={book.content}
                author={book.author}
                link={book.link}
              />
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
