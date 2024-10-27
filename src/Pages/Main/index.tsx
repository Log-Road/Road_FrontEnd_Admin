import { Arrow2, Work, Board } from "@/Assets";
import styled from "styled-components";
import { color, font } from "@/Styles"

const Main = () => {
  return (
    <Container>
      <MainContainer>
        <MainSection>
          <SectionTitle>
            <Accent>DSM의 프로젝트</Accent>를<br /> 저장하고 통합하는 공간
          </SectionTitle>

          <ProjectWrapper>
            <TextWrapper>
              <ProjectText>프로젝트 관리하기</ProjectText>
              <InfoText>글 승인 및 반려하기</InfoText>
            </TextWrapper>
            <ArrowWrapper>
              <Arrow2 color={color.white} rotate="right" />
            </ArrowWrapper>
          </ProjectWrapper>

          <ContestWrapper>
            <TextWrapper>
              <div>
                <ContestText>현재 진행중인 대회가 있다면?</ContestText>
                <ContestText>대회 진행하러가기</ContestText>
              </div>
              <ContestInfoText>대회를 모아보고 관리하러 가기</ContestInfoText>
            </TextWrapper>
            {/* <Work /> */}
          </ContestWrapper>
        </MainSection>
        <Board />
      </MainContainer>
    </Container>
  );
};

export default Main;

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const MainContainer = styled.div`
width: 1000px;
display: flex;
justify-content: space-between;
align-items: center;
`

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
`;

const SectionTitle = styled.p`
${font.semi32}
line-height: 120%;
`;

const Accent = styled.span`
color: ${color.blue[500]};
`;

const ProjectWrapper = styled.div`
display: flex;
width: 500px;
justify-content: space-between;
padding: 20px 32px;
border-radius: 20px;
background-color: ${color.blue[600]};
`;

const TextWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const ProjectText = styled.p`
${font.medium24}
color: ${color.white};
`;

const InfoText = styled.p`
${font.medium14}
color: ${color.white};
`;

const ArrowWrapper = styled.div`
width: 50px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
padding: 8px;
border-radius: 100px;
border: 1.5px solid ${color.white};
`;

const ContestWrapper = styled.div`
position: relative;
display: flex;
width: 500px;
height: 160px;
padding: 30px;
border-radius: 20px;
background-color: ${color.blue[200]};
`;

const ContestText = styled.p`
${font.medium24}
color: ${color.blue[700]};
line-height: 130%;
`;

const ContestInfoText = styled.p`
${font.medium14}
color: ${color.blue[700]};
`;

const WorkImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`
