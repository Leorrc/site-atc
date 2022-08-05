import { TitleContainer } from './styles'

interface TitleContainerProps {
  marginLeft?: string
  marginRight?: string
  textAlign?: string
  title: string
  maxWidth?: string
  children?: JSX.Element | JSX.Element[]
}

export function TitleCenter({
  marginLeft,
  marginRight,
  textAlign,
  title,
  maxWidth,
  children
}: TitleContainerProps) {
  return (
    <TitleContainer
      maxWidth={maxWidth}
      marginLeft={marginLeft}
      marginRight={marginRight}
      textAlign={textAlign}
    >
      <h2>{title}</h2>
      {children}
    </TitleContainer>
  )
}
