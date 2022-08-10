import { MainContainer } from './styles'

interface GalleryFlexContainerProps {
  flex?: 'row' | 'column'
  flexWrap?: 'wrap' | 'nowrap'
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'

  margin?: string
  maxWidth?: string
  gap?: string
  children?: JSX.Element | JSX.Element[]
}

export function ContainerFlex({
  flex,
  flexWrap,
  margin,
  justifyContent,
  maxWidth,
  children,
  gap
}: GalleryFlexContainerProps) {
  return (
    <>
      <MainContainer
        flex={flex}
        flexWrap={flexWrap}
        margin={margin}
        justifyContent={justifyContent}
        maxWidth={maxWidth}
        gap={gap}
      >
        {children}
      </MainContainer>
    </>
  )
}
