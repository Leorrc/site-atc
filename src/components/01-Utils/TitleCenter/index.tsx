import { TitleContainer } from './styles'

interface TitleContainerProps {
  marginLeft?: string
  marginRight?: string
  textAlign?: string
  title: string
  maxWidth?: string
  paddingBotton?: string
  marginBotton?: string
  children?: JSX.Element | JSX.Element[]
}

export function TitleCenter({
  marginLeft,
  marginRight,
  textAlign,
  title,
  maxWidth,
  paddingBotton,
  marginBotton,
  children
}: TitleContainerProps) {
  return (
    <TitleContainer
      maxWidth={maxWidth}
      marginLeft={marginLeft}
      marginRight={marginRight}
      textAlign={textAlign}
      paddingBotton={paddingBotton}
    >
      <h2>{title}</h2>
      {children}
    </TitleContainer>
  )
}
