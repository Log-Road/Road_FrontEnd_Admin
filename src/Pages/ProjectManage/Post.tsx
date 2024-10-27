import styled from "styled-components"
import Write from "@/Pages/ProjectManage/Project"
import { Status } from "@/Assets"
import { color, font } from "@/Styles"
import Approve from "@/Components/PostCard/Approve"
import Refuse from "@/Components/PostCard/Refuse"

const Post = () => {
  return (
    <Container>
      <Write />
      <SelectType>
        <ProjectStatus>
          <Status color={color.gray[700]} />
          <Text>승인대기</Text>
        </ProjectStatus>
        <Approve />
        <Refuse type="Refuse" />
      </SelectType>
    </Container>
  )
}

export default Post

const Container = styled.div`
width: 920px;
display: flex;
justify-content: space-between;
`

const SelectType = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
`

const ProjectStatus = styled.span`
display: flex;
gap: 8px;
padding: 8px 16px;
align-items: center;
border-radius: 20px;
background-color: ${color.white};
`

const Text = styled.p`
${font.medium14}
color: ${color.gray[700]};
`