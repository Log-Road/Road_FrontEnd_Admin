import { color, font } from "@/Styles"
import styled from "styled-components"

interface TagPropsType {
  text?: string,
  bgColor?: string,
  textColor?: string
}

export default function StatusTag({
  text, 
  bgColor = color.gray[100],
  textColor = color.gray[600]
}: TagPropsType) {
  return (
    <TagContainer bgColor={bgColor}>
      <Text textColor={textColor}>{text}</Text>
    </TagContainer>
  )
}

const TagContainer = styled.span<{ bgColor: string }>`
  width: fit-content;
  padding: 4px 12px;
  border-radius: 20px;
  background-color: ${({ bgColor }) => bgColor};
`

const Text = styled.div<{ textColor: string }>`
  ${font.regular12}
  color: ${({ textColor }) => textColor};
`
