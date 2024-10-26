import styled from "styled-components";
import { Heart, Link } from "@/Assets";
import Tag from "@/Components/Common/Tag";
import { color, font } from "@/Styles";

const Write = () => {
  return (
    <Container>
      <ContentSection>
        <Thumbnail />
        <ProjectInfo>
          <div>
            <ContestTitle>2024 교내 해커톤</ContestTitle>
            <ProjectTitle>이것은 프로젝트 이름</ProjectTitle>
          </div>
          <LikesSection>
            <Heart size={20} color={color.gray[200]} />
            <LikeCount>100</LikeCount>
          </LikesSection>
          <TeamSection>
            <TeamType>동아리 (Log)</TeamType>
            <MemberList>
              <MemberName>홍길동</MemberName>
              <MemberName>홍길동</MemberName>
            </MemberList>
          </TeamSection>
          <Summary>아슬라 별하 이플 함초롱하다 사과 우리는 아리아 소솜 그루잠 여우비 달볓 우리는 노트북 나래 아슬라 감또개 아련 여우비 도담도담 컴퓨터 가온누리 나비잠 사과 다솜 별하 나래 도서 아련 아리아 다솜 도서 가온누리 나래 산들림 별빛 아름드리 곰다시 미리내 감사합니다 비나리</Summary>
        </ProjectInfo>
      </ContentSection>

      <Details>
        <InfoSection>
          <InfoLabel>기술스택</InfoLabel>
          <Tags>
            <Tag text="React" />
          </Tags>
        </InfoSection>
        <InfoSection>
          <InfoLabel>본문</InfoLabel>
          <Description>
            청춘! 이는 듣기만 하여도 가슴이 설레는 말이다. 청춘! 너의 두 손을 가슴에 대고, 물방아 같은 심장의 고동을 들어 보라. 청춘의 피는 끓는다. 끓는 피에 뛰노는 심장은 거선(巨船)의 기관(汽罐)같이 힘있다. 이것이다. 인류의 역사를 꾸며 내려온 동력은 바로 이것이다. 이성(理性)은 투명하되 얼음과 같으며, 지혜는 날카로우나 갑 속에 든 칼이다. 청춘의 끓는 피가 아니더면, 인간이 얼마나 쓸쓸하랴? 얼음에 싸인 만물(萬物)은 죽음이 있을 뿐이다.

            그들에게 생명을 불어넣는 것은 따뜻한 봄바람이다. 풀밭에 속잎 나고, 가지에 싹이 트고, 꽃 피고 새 우는 봄날의 천지는 얼마나 기쁘며, 얼마나 아름다우냐? 이것을 얼음 속에서 불러내는 것이 따뜻한 봄바람이다. 인생에 따뜻한 봄바람을 불어 보내는 것은 청춘의 끓는 피다. 청춘의 피가 뜨거운지라, 인간의 동산에는 사랑의 풀이 돋고, 이상(理想)의 꽃이 피고, 희망(希望)의 놀고 뜨고, 열락(悅樂)의 새가 운다.
            사랑의 풀이 없으면 인간은 사막이다. 오아시스도 없는 사막이다. 보이는 끝까지 찾아다녀도, 목숨이 있는 때까지 방황하여도, 보이는 것은 거친 모래뿐일 것이다. 이상의 꽃이 없으면, 쓸쓸한 인간에 남는 것은 영락(零落)과 부패(腐敗) 뿐이다. 낙원을 장식하는 천자만홍(千紫萬紅)이 어디 있으며, 인생을 풍부하게 하는 온갖 과실이 어디 있으랴?

            이상! 우리의 청춘이 가장 많이 품고 있는 이상! 이것이야말로 무한한 가치를 가진 것이다. 사람은 크고 작고 간에 이상이 있음으로써 용감하고 굳세게 살 수 있는 것이다.
            석가(釋迦)는 무엇을 위하여 설산(雪山)에서 고행(苦行)을 하였으며, 예수는 무엇을 위하여 광야(曠野)에서 방황하였으며, 공자는 무엇을 위하여 천하를 철환(轍環)하였는가? 밥을 위하여서, 옷을 위하여서, 미인(美人)을 구하기 위하여서 그리하였는가? 아니다. 그들은 커다란 이상, 곧 만천하(萬天下)의 대중(大衆)을 품에 안고, 그들에게 밝은 길을 찾아 주며, 그들을 행복스럽고 평화스러운 곳으로 인도하겠다는, 커다란 이상을 품었기 때문이다. 그러므로 그들은 길지 아니한 목숨을 사는가 싶이 살았으며, 그들의 그림자는 천고에 사라지지 않는 것이다. 이것은 가장 현저하여 일월과 같은 예가 되려니와, 그와 같지 못하다 할지라도 창공에 반짝이는 뭇 별과 같이, 산야(山野)에 피어나는 군영(群英)과 같이, 이상은 실로 인간의 부패를 방지하는 소금이라 할지니, 인생에 가치를 주는 원질(原質)이 되는 것이다.

            청춘! 이는 듣기만 하여도 가슴이 설레는 말이다. 청춘! 너의 두 손을 가슴에 대고, 물방아 같은 심장의 고동을 들어 보라. 청춘의 피는 끓는다. 끓는 피에 뛰노는 심장은 거선(巨船)의 기관(汽罐)같이 힘있다. 이것이다. 인류의 역사를 꾸며 내려온 동력은 바로 이것이다. 이성(理性)은 투명하되 얼음과 같으며, 지혜는 날카로우나 갑 속에 든 칼이다. 청춘의 끓는 피가 아니더면, 인간이 얼마나 쓸쓸하랴? 얼음에 싸인 만물(萬物)은 죽음이 있을 뿐이다.
          </Description>
        </InfoSection>

        <VideoLinkSection>
          <Link size={18} color={color.gray[700]} />
          <VideoLabel>시연영상 링크</VideoLabel>
          <VideoUrl>https://www.youtube.com/watch?v=oGnPF2YigLI</VideoUrl>
        </VideoLinkSection>
      </Details>
    </Container>
  );
};

export default Write;

const Container = styled.div`
width: 720px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 40px;
  background-color: ${color.white};
  border-radius: 12px;
  box-shadow : 0 10px 100px 10px rgba(0, 0, 0, 0.2);
`;

const ContentSection = styled.div`
  height: 200px;
  display: flex;
  justify-content: space-between;
`;

const Thumbnail = styled.div`
  width: 55%;
  height: 100%;
  background-color: red
`;

const ProjectInfo = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
`;

const ContestTitle = styled.p`
${font.regular16}
`;

const ProjectTitle = styled.p`
${font.medium20}
`;

const LikesSection = styled.div`
display: flex;
align-items: center;
gap: 8px;
`;

const LikeCount = styled.span`
${font.regular14}
color: ${color.gray[500]};
`;

const TeamSection = styled.div`
display: flex;
gap: 8px;
`;

const TeamType = styled.span`
${font.medium14}
color: ${color.gray[700]};
`;

const MemberList = styled.div`
display: flex;
flex-wrap: wrap;
gap: 8px;
`;

const MemberName = styled.span`
${font.regular14}
color: ${color.gray[700]};
`;

const Summary = styled.p`
  ${font.regular12}
  line-height: 160%;
`;

const Details = styled.div`
display: flex;
flex-direction: column;
gap: 32px;
`;

const InfoSection = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
`;

const InfoLabel = styled.p`
${font.medium14}
`;

const Tags = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
gap: 8px;
`;

const Description = styled.p`
${font.regular14}
line-height: 160%;
`;

const VideoLinkSection = styled.div`
display: flex;
align-items: center;
padding: 4px 20px;
gap: 8px;
border-radius: 20px;
background-color: ${color.gray[100]};
`;

const VideoLabel = styled.span`
${font.medium14}
color: ${color.gray[600]};
`;

const VideoUrl = styled.a`
${font.regular14}
color: ${color.gray[600]};
`;
