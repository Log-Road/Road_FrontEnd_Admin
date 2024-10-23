import styled from "styled-components"
import { font, color } from "../../Style"

interface ButtonProps {
  icon?: React.ComponentType<{ color?: string }>,
  text?: string,
  onClick?: () => void
}

export default function Button({ icon: Icon, text, onClick }: ButtonProps) {
  return (
    <Container onClick={onClick}>
      {Icon && <Icon color={color.blue[500]} />}
      <Text>{text}</Text>
    </Container>
  )
}

const Container = styled.button`
display: flex;
align-items: center;
gap: 4px;
padding: 4px 12px;
border: 1.4px solid ${color.blue[500]};
border-radius: 8px;
background-color: ${color.white};
`

const Text = styled.p`
${font.semi12}
color: ${color.blue[500]};
`