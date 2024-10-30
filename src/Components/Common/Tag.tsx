import { color, font } from "@/Styles";
import styled from "styled-components";

export default function Tag({ text }: { text: string }) {
  return (
    <TagContainer>
      <Text>{text}</Text>
    </TagContainer>
  )
}

const TagContainer = styled.span`
  padding: 4px 12px;
  border-radius: 8px;
  border: 1px solid ${color.gray[500]};
`
const Text = styled.p`
  ${font.regular16}
  color: ${color.gray[700]};
`