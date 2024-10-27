import { Arrow1 } from "@/Assets"
import styled from "styled-components"
import { font, color } from "@/Styles"

interface PropsType {
  text?: string
}

const Calendar = ({ text }: PropsType) => {
  return (
    <>
      <Container>
        <Text>{text}</Text>
        <Arrow1
          size={20}
          color={color.gray[500]}
          rotate="bottom"
        />
      </Container>
    </>
  )
}

export default Calendar

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  gap: 16px;
  border-radius: 8px;
  background-color: ${color.gray[100]};
`

const Text = styled.p`
  ${font.medium12}
  color: ${color.gray[600]};
`