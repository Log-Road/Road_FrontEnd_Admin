import styled from "styled-components"
import { font, color } from "@/Styles"
import { ChangeEvent } from "react"

interface LabelInputType {
  type: string,
  name: string,
  value?: string,
  label: string,
  placeholder: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

const LabelInput = ({ ...props }: LabelInputType) => {
  return (
    <Container>
      <Label>{props.label}</Label>
      <Input {...props} />
    </Container>
  )
}

export default LabelInput

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
`

const Label = styled.p`
${font.regular12}
color: ${color.gray[600]};
`

const Input = styled.input`
width: 100%;
padding: 8px 12px;
border: none;
border-radius: 4px;
border: 1px solid ${color.gray[200]};

::placeholder {
  color: ${color.gray[200]};
}
`