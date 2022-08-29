import { CardDefault, MemberInfos, Pic, Social } from './styles'

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

interface MemberProps {
  imgUrl?: string
  name: string
  description?: string
  title?: string
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

export function CardMember({
  imgUrl,
  name,
  title,
  description,
  city,
  phone,
  email,
  socialList
}: MemberProps) {
  return (
    <CardDefault>
      {imgUrl && (
        <Pic>
          <img src={imgUrl} />
        </Pic>
      )}
      <MemberInfos>
        <h4>{name}</h4>
        <span>{title}</span>
        <p>{description}</p>

        {city && <p>Cidade: {city} </p>}
        {phone && <p>Telefone: {phone}</p>}
        {email && <p>Email: {email}</p>}
        <Social>
          {socialList.map(social => (
            <a href={social.link} target="_blank">
              {renderSwitch(social.network)}
            </a>
          ))}
        </Social>
      </MemberInfos>
    </CardDefault>
  )
}
