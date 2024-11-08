import styled from "styled-components"
import { color, font } from "@/Styles"
import SelectTag from "@/Components/Common/SelectTag"
import Button from "@/Components/Common/Button"
import { useEffect, useState } from "react"
import AwardProject from "@/Components/Project/AwardProject"
import { useModal } from "@/Context/ModalContext"
import { CategoryItems } from "@/Constants"
import Graph from "@/Components/Management/Graph"
import { useParams } from 'react-router-dom';
import { useGetVote } from "@/Utils/api/Contest/award"

const Award = () => {
  const { id } = useParams()
  const { data: voteData } = useGetVote(id || '')
  const { openModal } = useModal()

  const [award, setAward] = useState<boolean>(false)
  const [select, setSelect] = useState<boolean>()
  const [selectCategory, setSelectCategory] = useState<string>("PERSONAL")

  const handleClickAward = () => {
    console.log("시상하기")
  }

  const handleClickProject = () => {
    openModal("Award", null)
  }

  return (
    <Container>
      <Content>
        <TopWrap>
          <TitleWrap>
            <Title>프로젝트 시상하기</Title>
            <Button
              width="150px"
              text="시상 완료하기"
              active={award}
              onClick={handleClickAward}
            />
          </TitleWrap>

          <ContestOverview>
            <ContestDetails>
              <ContestTextSection>
                <ContestNameAndDate>
                  <ContestName>2024 해커톤 대회</ContestName>
                  <DateText>2024.04.27 ~ 2024.04.30</DateText>
                </ContestNameAndDate>
                <Info>(간단한 대회 목적) 이 대회는 실시함으로써  학생들의 실력을 향상시키고 자신의 실력을 되돌아 볼 기회를 주어지게 된다 여기에 대회 정보가 입력되어 있으면 좋지 않을까 하는 생각으로 써봅니다</Info>
              </ContestTextSection>
              <VoteInfoButton onClick={() => openModal("PendingVoters", id || '')}>투표 미참원 리스트 확인하러가기</VoteInfoButton>
            </ContestDetails>
            <GraphsSection>
              <Graph series={[voteData?.student || 0]} labels={["학생 투표율"]} />
              <Graph series={[voteData?.student || 0]} labels={["선생님 투표율"]} />
            </GraphsSection>
          </ContestOverview>

        </TopWrap>
        <TagWrap>
          {CategoryItems.map(({ category, text }) =>
            <SelectTag
              key={category}
              text={text}
              select={category === selectCategory}
              onClick={() => setSelectCategory(category)}
            />
          )}
        </TagWrap>
        <ProjectWrap>
          <AwardProject select={select} onClick={handleClickProject} />
          <AwardProject />
          <AwardProject />
          <AwardProject />
          <AwardProject />
          <AwardProject />
          <AwardProject />
          <AwardProject />
        </ProjectWrap>
      </Content>
    </Container>
  )
}

export default Award

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
`

const Content = styled.div`
width: 1236px;
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 24px;
`

const TopWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled.p`
${font.semi24}
`

const TagWrap = styled.div`
display: flex;
gap: 8px;
`

const ProjectWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

const ContestOverview = styled.div`
padding: 36px 40px;
border: 1px solid ${color.gray[200]};
border-radius: 8px;
display: flex;
justify-content: space-between;
`

const ContestDetails = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const VoteInfoButton = styled.button`
  width: fit-content;
  padding: 8px 20px;
  border: none;
  border-radius: 8px;
  background-color: ${color.gray[100]};
  color: ${color.gray[600]};
`

const ContestTextSection = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
`

const ContestNameAndDate = styled.div`
display: flex;
align-items: flex-end;
gap: 12px;
`

const ContestName = styled.p`
${font.medium24}
color: ${color.blue[300]};
`

const DateText = styled.p`
${font.regular14}
color: ${color.gray[500]};
`

const Info = styled.p`
${font.regular14}
color: ${color.gray[600]};
`

const GraphsSection = styled.div`
width: 500px;
display: flex;
`