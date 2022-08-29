import React from 'react'
import { Container } from './styles'

interface LayoutProps {
  maxWidth?: string
  padding?: string
  width?: string
  margin?: string
  children?: JSX.Element | JSX.Element[]
}

export function Layout({
  maxWidth,
  padding,
  width,
  margin,
  children
}: LayoutProps) {
  return (
    <>
      <Container
        maxWidth={maxWidth}
        padding={padding}
        width={width}
        margin={margin}
      >
        {children}
      </Container>
    </>
  )
}
