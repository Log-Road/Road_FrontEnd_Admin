import { color, font } from "@/Styles";
import styled from "styled-components";

export default function AwardTag({ text }: { text: string }) {
  return (
    <TagContainer>
      <Text>{text}</Text>
    </TagContainer>
  )
}

const TagContainer = styled.span`
  padding: 4px 12px;
  border-radius: 8px;
  border: 1px solid ${color.gray[200]};
`
const Text = styled.p`
  ${font.regular14}
  color: ${color.gray[500]};
`