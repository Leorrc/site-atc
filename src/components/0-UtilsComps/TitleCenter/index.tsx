import { TitleContainer } from './styles'

interface TitleContainerProps {
  marginLeft?: string
  marginRight?: string
  textAlign?: string
  title: string
  children?: JSX.Element | JSX.Element[]
}

export function TitleCenter({
  marginLeft,
  marginRight,
  textAlign,
  title,
  children
}: TitleContainerProps) {
  return (
    <TitleContainer
      marginLeft={marginLeft}
      marginRight={marginRight}
      textAlign={textAlign}
    >
      <h2>{title}</h2>
      {children}
    </TitleContainer>
  )
}
