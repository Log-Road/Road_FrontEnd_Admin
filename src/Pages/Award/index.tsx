import styled from "styled-components"
import { color, font } from "@/Styles"
import SelectTag from "@/Components/Common/SelectTag"
import SelectProject from "@/Components/Project/SelectProject"
import Button from "@/Components/Common/Button"
import { useState } from "react"
import AwardProject from "@/Components/Project/AwardProject"
import ContestInfo from "@/Pages/Award/ContestInfo"

const Award = () => {

  const [finish, setFinish] = useState(false)

  const handleClickAward = () => {
    console.log("시상하기")
  }

  return (
    <Container>
      <Content>
        <TopWrap>
          <TitleWrap>
            <Title>프로젝트 시상하기</Title>
            <Button width="150px" text="시상 완료하기" active={finish} onClick={handleClickAward} />
          </TitleWrap>
          <ContestInfo />
        </TopWrap>
        <TagWrap>
          {["개인", "팀", "동아리"].map((value) => <SelectTag key={value} text={value} />)}
        </TagWrap>
        <ProjectWrap>
          <AwardProject />
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