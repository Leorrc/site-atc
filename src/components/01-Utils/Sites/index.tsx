import { Container, Name } from './styles'

interface SiteProps {
  name: string
  link: string
}

export function Sites({ name, link }: SiteProps) {
  return (
    <Container>
      <Name>
        {name && <h4>{name}</h4>}
        {link && (
          <a href="" target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        )}
      </Name>
    </Container>
  )
}
