import { color } from "@/Styles"
import styled from "styled-components"

interface InputPropsType {
  placeholder?: string,
  onChange?: () => void,
  onClick?: () => void
}

const Input = ({ placeholder, onChange, onClick }: InputPropsType) => {
  return (
    <InputContainer placeholder={placeholder} />
  )
}

export default Input

const InputContainer = styled.input`
width: 100%;
padding: 8px 16px;
border: none;
border-radius: 4px;
background-color: ${color.gray[100]};
`