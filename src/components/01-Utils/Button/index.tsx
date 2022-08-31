import { ButtonComponent } from './styles'

export interface ButtonProps {
  fullWidth?: boolean
  children?: JSX.Element | JSX.Element[]
}

function Button({ fullWidth, children }: ButtonProps) {
  return (
    <>
      <ButtonComponent>{children}</ButtonComponent>
    </>
  )
}

export default Button
