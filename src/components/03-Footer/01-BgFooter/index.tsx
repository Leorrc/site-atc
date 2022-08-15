import { DivBg } from './styles'

interface Props {
  children?: JSX.Element | JSX.Element[]
}

export function BgFooter({ children }: Props) {
  return (
    <>
      <DivBg>{children}</DivBg>
    </>
  )
}
