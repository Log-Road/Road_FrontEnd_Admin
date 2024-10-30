import styled from "styled-components"
import { font, color } from "@/Styles"
import Tag from "@/Components/Common/Tag"

const Inquiry = () => {

  return (
    <Content>
      <TopWrap>
        <ContestTitle>프로젝트 이름</ContestTitle>
        <DateText>2024.04.05 ~ 2024.04.12</DateText>
      </TopWrap>
      <Column>
        <InfoWrap>
          <Label>대상</Label>
          <Description>대덕소프트웨어마이스터고등학교 전체 학생</Description>
        </InfoWrap>
        <InfoWrap>
          <Label>장소</Label>
          <Description>대덕소프트웨어마이스터고등학교 우정관</Description>
        </InfoWrap>
      </Column>
      <Column>
        <Label>대회 목적</Label>
        <Description>
          아슬라 별하 이플 함초롱하다 사과 우리는 아리아 소솜 그루잠 여우비 달볓
          우리는 노트북 나래 아슬라 감또개 아련 여우비 도담도담 컴퓨터 가온누리
          나비잠 사과 다솜 별하 나래 도서 아련 아리아 다솜 도서 가온누리 나래 산들림
          별빛 아름드리 곰다시 미리내 감사합니다 비나리
        </Description>
      </Column>
      <AwardSection>
        <AwardTitle>시상할 상 목록</AwardTitle>
        <TagWrap>
          <Tag text="금상" />
          <Tag text="은상" />
        </TagWrap>
      </AwardSection>
    </Content>
  )
}

export default Inquiry

const Content = styled.div`
width: 700px;
display: flex;
flex-direction: column;
padding: 30px;
gap: 28px;
border-radius: 20px;
`

const TopWrap = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: flex-start;
gap: 12px;
padding: 12px 0;
border-bottom: 1px solid ${color.gray[200]};
`

const InfoWrap = styled.div`
display: flex;
align-items: center;
gap: 12px;
`

const Column = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
`

const AwardSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const TagWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const ContestTitle = styled.p`
${font.semi24}
`

const Description = styled.p`
${font.regular14}
color: ${color.gray[500]};
line-height: 180%;
`

const DateText = styled.p`
${font.medium12}
color: ${color.gray[500]};
`

const Label = styled.p`
${font.medium16}
color: ${color.gray[700]};
`

const AwardTitle = styled.p`
${font.medium18}
`