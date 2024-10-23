import styled from "styled-components"
import { color } from "../../Style"

interface PropsType {
  width?: string,
  text?: string,
  active?: boolean,
  onClick?: () => void
}

export default function Button({ width = '100%', text, active = false, onClick }: PropsType) {
  return (
    <Container width={width} active={active}>
      {text}
    </Container>
  )
}

const Container = styled.button<{ width: string, active: boolean }>`
  width: ${({ width }) => width};
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: ${({ active }) => active ? color.blue[800] : color.blue[400]};
  color: ${color.white};
`
