import { TitleContainer } from './styles'

interface TitleContainerProps {
  marginLeft?: string
  marginRight?: string
  textAlign?: string
  title: string
  maxWidth?: string
  paddingBotton?: string
  marginBotton?: string
  span?: string
  children?: JSX.Element | JSX.Element[]
}

export function TitleCenter({
  marginLeft,
  marginRight,
  textAlign,
  title,
  span,
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
      marginBotton={marginBotton}
    >
      <h2>
        {title} {span}
      </h2>
      {children}
    </TitleContainer>
  )
}
