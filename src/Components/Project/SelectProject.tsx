import styled from "styled-components"
import * as S from "./style"
import { color, font } from "@/Styles"
import { Heart, Checking } from "@/Assets"
import { useState } from "react"
import { useCalculateSize } from "@/Hooks/useCalculateSize"

const ProjectManage = () => {

  const [open, setOpen] = useState<boolean>(false)
  const [divRef, size] = useCalculateSize()

  return (
    <Container>
      <Label>금상</Label>
      <Content onClick={() => setOpen(!open)}>
        {open ? (
          <>
            <Image src="https://cdn.aitimes.kr/news/photo/202303/27617_41603_044.jpg" />
            <ProjectInfoWrap>
              <S.ProjectName>프로젝트 이름</S.ProjectName>
              <S.Wrap>
                <Heart size={16} color={color.gray[300]} />
                <S.Text>100</S.Text>
              </S.Wrap>
              <S.Wrap>
                <S.TeamType ref={divRef}>동아리(Log)</S.TeamType>
                <S.MemberWrap width={size.width}>
                  <S.Text>홍길동</S.Text>
                </S.MemberWrap>
              </S.Wrap>
              <S.ProjectInfo>
                아슬라 별하 이플 함초롱하다 사과 우리는 아리아 소솜 그루잠 여우비 달볓 ...
              </S.ProjectInfo>
            </ProjectInfoWrap>
            <Button>자세히 보러가기</Button>
          </>
        ) : (
          <Wrap>
            <SelectText>선택된 프로젝트가 없습니다</SelectText>
            <Checking size={18} color={color.gray[600]} />
          </Wrap>
        )}
      </Content>
    </Container>
  );
};
export default ProjectManage

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
`

const Label = styled.div`
${font.medium14}
color: ${color.gray[500]};
`

const Content = styled.div`
width: 100%;
display: flex;
flex-direction: column;
border: 1px solid ${color.gray[200]};
// olor.blue[300] : color.gray[200]};
border-radius: 8px;
padding: 12px 8px;
gap: 12px;
`

const Image = styled.img`
width: 100%;
height: 150px;
object-fit: cover;
border-radius: 4px;
`

const ProjectInfoWrap = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`

const Button = styled.button`
padding: 4px;
border: none;
border-radius: 8px;
background-color: ${color.gray[100]};
color: ${color.gray[500]};
`

const SelectText = styled.p`
  ${font.medium16}
  color: ${color.gray[500]};
`

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`