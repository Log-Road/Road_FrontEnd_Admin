import { X } from "@/Assets"
import { color, font } from "@/Styles"
import styled from "styled-components"

interface TagPropsType {
  text?: string,
  count?: string
}

export default function RemovableTag({ text, count }: TagPropsType) {
  return (
    <Container>
      <Text>{text} ({count})</Text>
      <X size={16} color={color.gray[500]} />
    </Container>
  )
}

const Container = styled.div`
display: flex;
gap: 12px;
padding: 8px 12px;
align-items: center;
border-radius: 8px;
border: 1px solid ${color.gray[200]};
`

const Text = styled.p`
${font.regular12}
color: ${color.gray[700]};
`