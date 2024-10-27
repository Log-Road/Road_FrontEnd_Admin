import { Checking } from "@/Assets"
import { color, font } from "@/Styles"
import styled from "styled-components"

interface PropsType {
  text?: string,
  selected?: boolean
}

export default function Select({ text, selected = false }: PropsType) {
  return (
    <SelectContainer selected={selected}>
      <Text selected={selected}>{text}</Text>
      <Checking size={18} color={selected ? color.blue[300] : color.gray[600]} />
    </SelectContainer>
  )
}

const SelectContainer = styled.div<{ selected: boolean }>`
width: 100%;
padding: 8px 20px;
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid ${({ selected }) => selected ? color.blue[300] : color.gray[200]};
border-radius: 8px;

&:hover {
  background-color: ${color.gray[100]};
}
`

const Text = styled.p<{ selected: boolean }>`
${font.medium14}
color: ${({ selected }) => selected ? color.blue[300] : color.gray[600]};
`
