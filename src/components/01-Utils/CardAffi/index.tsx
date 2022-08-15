import {
  CardDefault,
  Name,
  Infos,
  DivDescription,
  DivContact,
  Social
} from './styles'

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillStar,
  AiFillGift
} from 'react-icons/ai'

interface SocialMedia {
  network: string
  link: string
}

interface AffiProps {
  name: string
  description?: string
  city?: string
  phone?: string
  email?: string
  socialList: SocialMedia[]
}

const renderSwitch = (network: string) => {
  switch (network) {
    case 'facebook':
      return <AiFillFacebook />

    case 'instagram':
      return <AiFillInstagram />

    case 'twitter':
      return <AiFillTwitterCircle />

    case 'linkedin':
      return <AiFillLinkedin />

    case 'doctor':
      return <AiFillStar />

    case 'site':
      return <AiFillGift />
  }
}

export function CardAffi({
  name,
  description,
  city,
  phone,
  email,
  socialList
}: AffiProps) {
  return (
    <CardDefault>
      <Name>
        <h4>{name}</h4>
      </Name>
      <Infos>
        <DivDescription>
          <span>{description}</span>
        </DivDescription>
        <DivContact>
          {city && <p>Cidade: {city} </p>}
          {phone && <p>Telefone: {phone}</p>}
          {email && <p>Email: {email}</p>}
        </DivContact>
        <Social>
          {socialList.map(social => (
            <a href={social.link} target="_blank">
              {renderSwitch(social.network)}
            </a>
          ))}
        </Social>
      </Infos>
    </CardDefault>
  )
}
