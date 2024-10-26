import { color, font } from "@/Styles"
import styled from "styled-components"

const Recent = () => {
  return (
    <RecentWrap>
      <TextWrap>
        <ContestName>2024 교내 해커톤</ContestName>
        <DateText>2024.01.01 ~ 2024.01.03</DateText>
      </TextWrap>
      <Button>시상하기</Button>
    </RecentWrap>
  )
}

export default Recent

const RecentWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 12px 32px;
border-radius: 8px;
border: 1px solid ${color.gray[200]};
`

const TextWrap = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
`

const Button = styled.button`
padding: 8px 28px;
border: none;
border-radius: 20px;
background-color: ${color.blue[300]};
${font.medium12}
color: ${color.white};
`

const Label = styled.p`
${font.semi12}
color: ${color.gray[700]};
`

const ContestName = styled.p`
${font.medium16}
`

const DateText = styled.p`
${font.regular12}
color: ${color.gray[500]};
`