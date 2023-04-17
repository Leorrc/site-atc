import ReactAudioPlayer from "react-audio-player";
import { CardDefault, MemberInfos, Pic, Social, Audio } from "./styles";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillStar,
  AiFillGift,
} from "react-icons/ai";

interface SocialMedia {
  network: string;
  link: string;
}

interface MemberProps {
  imgUrl?: string;
  name: string;
  description?: string;
  title?: string;
  city?: string;
  phone?: string;
  phone2?: string;
  email?: string;
  socialList?: SocialMedia[];
  som?: string;
}

const renderSwitch = (network: string) => {
  switch (network) {
    case "facebook":
      return <AiFillFacebook />;

    case "instagram":
      return <AiFillInstagram />;

    case "twitter":
      return <AiFillTwitterCircle />;

    case "linkedin":
      return <AiFillLinkedin />;

    case "doctor":
      return <AiFillStar />;

    case "site":
      return <AiFillGift />;
  }
};

export function CardMember({
  imgUrl,
  name,
  title,
  description,
  city,
  phone,
  phone2,
  email,
  socialList,
  som,
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
        <p>{title}</p>
        <span></span>
        <p>{description}</p>

        {city && <p>Cidade: {city} </p>}
        {phone && <p>Telefone: {phone}</p>}
        {phone2 && <p>Consultório: {phone2}</p>}
        {email && <p>Email: {email}</p>}
        {som && (
          <Audio>
            <AudioPlayer
              src="1.mp3"
              preload="auto"
              customAdditionalControls={[]}
            >
              {som}
            </AudioPlayer>
          </Audio>
        )}

        <Social>
          {socialList?.map((social) => (
            <a href={social.link} target="_blank">
              {renderSwitch(social.network)}
            </a>
          ))}
        </Social>
      </MemberInfos>
    </CardDefault>
  );
}
