import Button from '../Button'
import { CardDefault } from './styles'
import { FaChevronRight } from 'react-icons/fa'
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
          <li>
            {' '}
            <span>
              <FaChevronRight />
            </span>{' '}
            {description}
          </li>
        ))}
      </ul>
      {buttonText && <Button text={buttonText} />}
    </CardDefault>
  )
}
