import { CardDefault } from './styles'

interface CardProps {
  title: string
  ul: string
  li0: string
  li1: string
  li2: string
}

export function CardJoin({ title, ul, li0, li1, li2 }: CardProps) {
  return (
    <CardDefault>
      <h3>{title}</h3>
      <ul>
        {ul}
        <li>{li0}</li>
        <li>{li1}</li>
        <li>{li2}</li>
      </ul>
    </CardDefault>
  )
}
