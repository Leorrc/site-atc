import { CardDefault, MemberInfos, Pic, Social } from './styles'

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin
} from 'react-icons/ai'

interface SocialMedia {
  network: string
  link: string
}

interface MemberProps {
  imgUrl?: string
  name: string
  title: string
  description: string
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
  }
}

export function CardMember({
  imgUrl,
  name,
  title,
  description,
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
