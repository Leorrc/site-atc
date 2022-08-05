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
  marginTop?: string
  maxWidth?: string
  gap?: string
  children?: JSX.Element | JSX.Element[]
  columns?: string
}

export function ContainerGrid({
  grid,
  margin,
  justifyContent,
  maxWidth,
  children,
  gap,
  columns,
  marginTop
}: GalleryGridContainerProps) {
  return (
    <>
      <MainContainer
        grid={grid}
        marginTop={marginTop}
        margin={margin}
        justifyContent={justifyContent}
        maxWidth={maxWidth}
        gap={gap}
        columns={columns}
      >
        {children}
      </MainContainer>
    </>
  )
}