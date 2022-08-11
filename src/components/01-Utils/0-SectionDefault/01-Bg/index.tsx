import { DivBg } from './styles'
import fundo from '../../../images/full/bg1.jpg'

interface Props {
  children?: JSX.Element | JSX.Element[]
}

export function Bg({ children }: Props) {
  return (
    <>
      <DivBg>{children}</DivBg>
    </>
  )
}
