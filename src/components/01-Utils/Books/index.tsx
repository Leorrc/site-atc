import { Container, Name } from './styles'

interface BookProps {
  content: string
  author: string
}

export function Book({ content, author }: BookProps) {
  return (
    <Container>
      <Name>
        {content && <h4>Livro: {content} </h4>}
        {author && <h5>Autor: {author} </h5>}
      </Name>
    </Container>
  )
}
