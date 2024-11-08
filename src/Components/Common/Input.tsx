import { color } from "@/Styles"
import styled from "styled-components"
import { ChangeEvent } from "react"

interface InputPropsType {
  name: string,
  value: string,
  placeholder?: string,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
  onClick?: () => void
}

const Input = ({ onChange, onClick, ...props }: InputPropsType) => {
  return (
    <InputContainer 
      onChange={onChange} 
      onClick={onClick} 
      {...props} 
    />
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