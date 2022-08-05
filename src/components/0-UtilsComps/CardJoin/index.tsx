import Button from '../Button'
import { CardDefault } from './styles'

interface CardProps {
  title: string
  descriptionList: string[]
  buttonText?: string
}

export function CardJoin({ title, descriptionList, buttonText }: CardProps) {
  return (
    <CardDefault>
      <h3>{title}</h3>
      <ul>
        {descriptionList.map(description => (
          <li>- {description}</li>
        ))}
      </ul>
      {buttonText && <Button text={buttonText} />}
    </CardDefault>
  )
}
