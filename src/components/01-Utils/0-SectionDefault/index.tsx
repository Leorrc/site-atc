import React from 'react'
import { SectionContainer } from './styles'

interface SectionContainerProps {
  padding?: string
  paddingTop?: string
  paddingBotton?: string
  margin?: string
  marginTop?: string
  maxWidth?: string
  textAlign?: string
  backgroundColor?: string
  children?: JSX.Element | JSX.Element[]
}

export function SectionDefault({
  children,
  padding,
  paddingTop,
  paddingBotton,
  margin,
  marginTop,
  maxWidth,
  textAlign,
  backgroundColor
}: SectionContainerProps) {
  return (
    <>
      <SectionContainer
        padding={padding}
        paddingTop={paddingTop}
        paddingBotton={paddingBotton}
        margin={margin}
        marginTop={marginTop}
        maxWidth={maxWidth}
        textAlign={textAlign}
        backgroundColor={backgroundColor}
      >
        {children}
      </SectionContainer>
    </>
  )
}
