import { FaBook, FaUserTag, FaShoppingCart } from 'react-icons/fa'

import { Container, Name, Author, Left, Right, Purchase } from './styles'
import Button from '../Button'

interface BookProps {
  content: string
  author: string
  link?: string
}

export function NewBooks1({ content, author, link }: BookProps) {
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
              <FaUserTag /> <span>Autores/Associados:</span>
            </Right>
            {author}
          </>
        )}
      </Author>
      <Purchase>
        {link && (
          <Button>
            <>
              <a href={link} target="_blank">
                <FaShoppingCart /> <span>Comprar agora</span>
              </a>
            </>
          </Button>
        )}
      </Purchase>
    </Container>
  )
}
