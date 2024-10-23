import styled from "styled-components"
import { color } from "../../Style"

interface PropsType {
  width?: string,
  text?: string,
  active?: boolean,
  type?: "CHECK" | "CANCEL"
  onClick?: () => void
}

export default function AssentButton({
  width = '100%',
  text,
  active = false,
  type = "CHECK",
  onClick
}: PropsType) {
  const getColor = () => {
    switch (type) {
      case "CHECK":
        return active ? color.blue[800] : color.blue[400];
      case "CANCEL":
        return active ? color.red[300] : color.red[200];
      default:
        return color.black;
    };
  }

  return (
    <Container width={width} active={active} color={getColor()} onClick={onClick}>
      {text}
    </Container>
  )
}

const Container = styled.button<{ width: string, active: boolean }>`
  width: ${({ width }) => width};
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: ${({ color }) => color};
  color: ${color.white};
`
