import styled from "styled-components"
import Select from "@/Components/Management/Select"
import Banner from "@/Assets/Banner.svg"
import StatusProject from "@/Components/Project/StatusProject"
import { color, font } from "@/Styles"
import SelectTag from "@/Components/Common/SelectTag"

const ProjectManage = () => {

  const Tags = ["전체", "대기", "승인", "반려", "수정", "삭제"]

  return (
    <Container>
      <Content>
        <ContestSection>
          <ContestLabel>대회 선택</ContestLabel>
          <Select text="2024 교내해커톤 대회" />
          <Select text="다른 대회" />
          <Image src={Banner} />
        </ContestSection>

        <Body>
          <ContentHeader>
            <TextWrap>
              <Title>글 승인 및 반려</Title>
              <Info>업로드된 프로젝트를 확인하고 승인 및 반려를 눌러주세요</Info>
            </TextWrap>
            <TagWrap>
              {Tags.map((value) => <SelectTag text={value} />)}
            </TagWrap>
          </ContentHeader>
          <ProjectWrap>
            <StatusProject />
            <StatusProject />
            <StatusProject />

          </ProjectWrap>
        </Body>
      </Content>
    </Container>
  )
}

export default ProjectManage

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
`

const Content = styled.div`
width: 1200px;
display: flex;
justify-content: space-between;
gap: 20px;
`

const ContestSection = styled.div`
width: 300px;
display: flex;
flex-direction: column;
gap: 8px;
`

const ContestLabel = styled.p`
${font.medium16}
color: ${color.gray[500]};
`

const Image = styled.img`
width: 300px;
`

const Body = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
`

const ContentHeader = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
`

const TextWrap = styled.div`
display: flex;
gap: 8px;
align-items: flex-end;
`

const Title = styled.p`
${font.semi24}
`

const Info = styled.p`
${font.semi12}
color: ${color.gray[500]};
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