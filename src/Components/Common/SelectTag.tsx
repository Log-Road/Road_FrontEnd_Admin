import { color, font } from "@/Styles"
import styled from "styled-components"

interface PropsType {
  text?: string,
  select?: boolean,
  onClick?: () => void
}

export default function SelectTag({ text, select = false, onClick }: PropsType) {
  return (
    <TagContainer select={select} onClick={onClick}>
      <Text select={select}>{text}</Text>
    </TagContainer>
  )
}

const TagContainer = styled.span<{ select: boolean }>`
padding: 4px 24px;
border-radius: 12px;
border: 1px solid ${({ select }) => select ? color.blue[300] : color.gray[200]};
`

const Text = styled.p<{ select: boolean }>`
${font.medium14}
color: ${({ select }) => select ? color.blue[300] : color.gray[500]};
`