import { TitleContainer } from './styles'

interface TitleContainerProps {
  marginLeft?: string
  marginRight?: string
  textAlign?: string
  title: string
  maxWidth?: string
  padding?: string
  marginBotton?: string
  span?: string
  marginTop?: string
  children?: JSX.Element | JSX.Element[]
}

export function TitleCenter({
  marginLeft,
  marginRight,
  textAlign,
  title,
  span,
  marginTop,
  maxWidth,
  padding,
  marginBotton,
  children
}: TitleContainerProps) {
  return (
    <TitleContainer
      maxWidth={maxWidth}
      marginLeft={marginLeft}
      marginRight={marginRight}
      textAlign={textAlign}
      padding={padding}
      marginBotton={marginBotton}
      marginTop={marginTop}
    >
      <h1>
        {title} {span}
      </h1>
      {children}
    </TitleContainer>
  )
}
