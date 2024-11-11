import { Arrow1, BentArrow, Board, AwardBackground, GuideBackground } from "@/Assets"
import Button from "@/Components/Common/Button"
import styled from "styled-components"
import { font, color } from "@/Styles"
import { useGetRecentContest } from "@/Utils/api/Contest/award"
import { covertISOtoKST } from "@/Utils/Date"
import { useNavigate } from "react-router-dom"

const Main = () => {
  const navigation = useNavigate()
  const { data } = useGetRecentContest()
  const recentContest = data?.data.list[0] ?? null;

  return (
    <Container>

      <MainSection>
        <Title>
          <Accent>DSM의 프로젝트</Accent>를<br /> 저장하고 통합하는 공간
        </Title>

        <ProjectWrapper>
          <TextWrapper>
            <WrapperTitleText>프로젝트 관리하기</WrapperTitleText>
            <InfoText>대회 프로젝트 승인 및 반려</InfoText>
          </TextWrapper>
          <ArrowWrapper>
            <Arrow1 size={36} color={color.white} rotate="right" />
          </ArrowWrapper>
        </ProjectWrapper>

        <AwardAndGuideWrapper>
          <AwardWrapper onClick={() => navigation(`/award/${recentContest?.id ?? ''}`)}>
            <TextWrapper>
              <WrapperTitleText>최근 대회 시상하기</WrapperTitleText>
              <InfoText>{recentContest?.name || '대회 정보 없음'}</InfoText>
            </TextWrapper>
            <DateText>
              {covertISOtoKST(recentContest?.startDate || '')} ~ {covertISOtoKST(recentContest?.endDate || '')}
            </DateText>
          </AwardWrapper>

          <GuideWrapper>
            <GuideArrowWrapper>
              <BentArrow size={20} color={color.white} />
            </GuideArrowWrapper>
            <div>
              <GuideTitle>가이드라인</GuideTitle>
              <DescriptionText>ROAD를 더욱 활용하는 방법 웹문서로 알아보기</DescriptionText>
            </div>
            <Button text="확인하러가기" padding="4px" />
          </GuideWrapper>
        </AwardAndGuideWrapper>

      </MainSection>
      <ImageSection>
        <Board />
      </ImageSection>
    </Container>
  )
}

export default Main

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const MainSection = styled.div`
width: 520px;
display: flex;
flex-direction: column;
gap: 12px;
`

const ImageSection = styled.div`
display: none;

@media screen and (min-width: 1024px) {
  display: block;
}
`

const Title = styled.p`
${font.medium32}
`

const Accent = styled.span`
${font.semi32}
color: ${color.blue[500]};
`

const ProjectWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 24px 36px;
border-radius: 20px;
background-color: ${color.blue[300]};
`

const TextWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
`

const WrapperTitleText = styled.p`
${font.medium24}
color: ${color.white};
`

const InfoText = styled.p`
${font.regular16}
color: ${color.white};
`

const ArrowWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 2px;
border: 1.4px solid ${color.white};
border-radius: 100px;
`

const AwardAndGuideWrapper = styled.div`
display: flex;
justify-content: space-between;
gap: 12px;
`

const AwardWrapper = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 24px 36px;
border-radius: 20px;
background-image: url(${AwardBackground});
background-repeat: no-repeat;
background-size: cover;
`

const DateText = styled.p`
${font.regular14}
color: ${color.white};
`

const GuideWrapper = styled.div`
width: 140px;
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 12px;
padding: 24px 12px;
border-radius: 20px;
background-image: url(${GuideBackground});
background-repeat: no-repeat;
background-size: cover;
box-shadow : 0px 0px 12px 5px ${color.gray[100]};
`

const GuideArrowWrapper = styled.span`
width: fit-content;
display: flex;
justify-content: center;
align-items: center;
padding: 8px;
border-radius: 100%;
background-color: ${color.blue[500]};
`

const GuideTitle = styled.p`
${font.medium18}
`

const DescriptionText = styled.p`
${font.regular12}
color: ${color.gray[600]};
`
