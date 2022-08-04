import { MainContainer } from './styles'

interface GalleryGridContainerProps {
  grid?: 'row' | 'column'
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

export function ContainerGrid({
  grid,
  margin,
  justifyContent,
  maxWidth,
  children,
  gap
}: GalleryGridContainerProps) {
  return (
    <>
      <MainContainer
        grid={grid}
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
