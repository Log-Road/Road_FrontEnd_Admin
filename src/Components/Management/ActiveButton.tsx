import styled from "styled-components"
import { color } from "@/Styles"

interface ButtonProps {
  text?: string,
  active?: boolean,
  onClick?: () => void
}

export default function ActiveButton({ text, active = false, onClick }: ButtonProps) {
  return (
    <Button active={active} onClick={onClick}>
      {text}
    </Button>
  )
}

const Button = styled.button<{ active: boolean }>`
padding: 4px 20px;
border-radius: 8px;
border: 1px solid ${({ active }) => active ? color.gray[300] : color.gray[100]};
background-color: ${({ active }) => active ? color.white : color.gray[100]};
`