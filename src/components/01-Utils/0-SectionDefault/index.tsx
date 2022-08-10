import React from 'react'
import { SectionContainer } from './styles'

interface SectionContainerProps {
  padding?: string
  margin?: string
  maxWidth?: string
  textAlign?: string
  backgroundColor?: string
  children?: JSX.Element | JSX.Element[]
}

export function SectionDefault({
  children,
  padding,
  margin,
  maxWidth,
  textAlign,
  backgroundColor
}: SectionContainerProps) {
  return (
    <>
      <SectionContainer
        padding={padding}
        margin={margin}
        maxWidth={maxWidth}
        textAlign={textAlign}
        backgroundColor={backgroundColor}
      >
        {children}
      </SectionContainer>
    </>
  )
}
