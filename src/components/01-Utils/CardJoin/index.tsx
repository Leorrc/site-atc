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
          <>
            <li>
              {' '}
              <span>
                <FaChevronRight />
              </span>{' '}
              {description}
            </li>
            <br />
          </>
        ))}
      </ul>
      {buttonText && (
        <Button>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScKF3mjS4fIwIo2CEBjssFwoNfBSRY647jYoF-xoAg5FK3n0w/viewform"
            target="_blank"
          >
            Associar-se
          </a>
        </Button>
      )}
    </CardDefault>
  )
}
