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
  id?: string
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
  backgroundColor,
  id
}: SectionContainerProps) {
  return (
    <>
      <SectionContainer
        id={id}
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
