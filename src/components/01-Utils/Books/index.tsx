import { FaBook, FaUserTag } from 'react-icons/fa'
import { Divider2 } from '../Dividers/styles'
import { Container, Name, Author, Left, Right } from './styles'

interface BookProps {
  content: string
  author: string
}

export function Book({ content, author }: BookProps) {
  return (
    <Container>
      <Name>
        {content && (
          <>
            <Left>
              <FaBook /> <span>Livro:</span>
            </Left>
            {content}
          </>
        )}
      </Name>
      <Author>
        {author && (
          <>
            <Right>
              <FaUserTag /> <span>Autores:</span>
            </Right>
            {author}
          </>
        )}
      </Author>
    </Container>
  )
}
