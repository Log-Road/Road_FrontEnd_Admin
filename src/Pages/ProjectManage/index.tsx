import styled from "styled-components"
import Select from "@/Components/Management/Select"
import Banner from "@/Assets/Banner.svg"
import StatusProject from "@/Components/Project/StatusProject"
import { color, font } from "@/Styles"
import SelectTag from "@/Components/Common/SelectTag"
import { useState } from "react"

const ProjectManage = () => {
  
  const Tags = ["전체", "대기", "승인", "반려", "수정", "삭제"]
  
  const [select, setSelect] = useState<string>("전체")

  return (
    <Container>
      <Content>
        <ContentHeader>
          <TextWrap>
            <Title>글 승인 및 반려</Title>
            <Info>업로드된 프로젝트를 확인하고 승인 및 반려를 눌러주세요</Info>
          </TextWrap>
          <TagWrap>
            {Tags.map((value) => 
              <SelectTag
                text={value}
                select={select === value}
                onClick={() => setSelect(value)}
              />
            )}
          </TagWrap>
        </ContentHeader>
        <ProjectWrap>
          <StatusProject />
          <StatusProject />
          <StatusProject />
          <StatusProject />
          <StatusProject />
          <StatusProject />
          <StatusProject />
          <StatusProject />
          <StatusProject />
        </ProjectWrap>
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
width: 1236px;
display: flex;
flex-direction: column;
gap: 20px;
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
flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`