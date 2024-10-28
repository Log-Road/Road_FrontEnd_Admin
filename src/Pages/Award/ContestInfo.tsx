import Graph from "@/Components/Management/Graph"
import { color, font } from "@/Styles"
import styled from "styled-components"

const ContestInfo = () => {
  return (
    <Container>
      <InfoWrap>
        <TextWrap>
          <ContestNameAndDate>
            <ContestName>2024 해커톤 대회</ContestName>
            <DateText>2024.04.27 ~ 2024.04.30</DateText>
          </ContestNameAndDate>
          <Info>(간단한 대회 목적) 이 대회는 실시함으로써  학생들의 실력을 향상시키고 자신의 실력을 되돌아 볼 기회를 주어지게 된다 여기에 대회 정보가 입력되어 있으면 좋지 않을까 하는 생각으로 써봅니다</Info>
        </TextWrap>
        <Button>투표 미참원 리스트 확인하러가기</Button>
      </InfoWrap>
      <GraphWrap>
        <Graph series={[50.0]} labels={["학생 투표율"]} />
        <Graph series={[50.0]} labels={["선생님 투표율"]} />
      </GraphWrap>
    </Container>
  )
}

export default ContestInfo

const Container = styled.div`
padding: 20px;
border: 1px solid ${color.gray[200]};
border-radius: 8px;
display: flex;
justify-content: space-between;
`

const InfoWrap = styled.div`
width: 60%;
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 20px;
`

const Button = styled.button`
  width: fit-content;
  padding: 4px 12px;
  border: none;
  border-radius: 8px;
  background-color: ${color.gray[100]};
  color: ${color.gray[500]};
`

const TextWrap = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
`

const ContestNameAndDate = styled.div`
display: flex;
align-items: flex-end;
gap: 4px;
`

const ContestName = styled.p`
${font.semi18}
color: ${color.blue[300]};
`

const DateText = styled.p`
${font.regular12}
color: ${color.gray[500]};
`

const Info = styled.p`
${font.regular14}
color: ${color.gray[600]};
`

const GraphWrap = styled.div`
  display: flex;
`