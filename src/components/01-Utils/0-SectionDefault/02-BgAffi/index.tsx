import { DivBg } from './styles'
import fundo from '../../../images/full/bg1.jpg'

interface Props {
  children?: JSX.Element | JSX.Element[]
}

export function BgAffi({ children }: Props) {
  return (
    <>
      <DivBg>{children}</DivBg>
    </>
  )
}
