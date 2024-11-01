import { Heart } from "@/Assets";
import { color } from "@/Styles";
import * as S from "./style";
import { useCalculateSize } from "@/Hooks/useCalculateSize";

interface PropsType {
  select?: boolean,
  onClick?: () => void
}

export default function AwardProject({ select = false, onClick }: PropsType) {

  const [divRef, size] = useCalculateSize()

  return (
    <S.AwardContainer onClick={onClick} select={select}>
      {
        select &&
        <S.Tag>
          <S.TagText>금상</S.TagText>
        </S.Tag>
      }

      <S.Image src="https://blog.kakaocdn.net/dn/0mySg/btqCUccOGVk/nQ68nZiNKoIEGNJkooELF1/img.jpg" />

      <S.Content>

        <div>
          <S.ProjectName>아슬라 별하 이플 함초롱하다 사과 우리는 </S.ProjectName>
          <S.ProjectInfo>아슬라 별하 이플 함초롱하다 사과 우리는 아리아 소솜 그루잠 여우비 달볓 우리는 노트북 나래 아슬라 감또개 아련 여우비 도담도담 컴퓨터 가온누리 나비잠 사과 다솜 별하 나래 도서 아련 아리아 다솜 도서 가온누리 나래 산들림 별빛 아름드리 곰다시 미리내 감사합니다 비나리 포도 바람꽃 별하 가온해 사과 산들림 나래 컴퓨터 이플 바람꽃.</S.ProjectInfo>
        </div>

        <S.Wrap>
          <S.TeamType ref={divRef}>동아리 (Log)</S.TeamType>
          <S.MemberWrap width={size.width}>
            <S.Text>홍길동</S.Text>
            <S.Text>신사임당</S.Text>
          </S.MemberWrap>
        </S.Wrap>

        <S.DateAndLikeWrap>
          <S.Text>2023.03.25</S.Text>
          <S.HeartWrap>
            <Heart size={16} color={color.gray[300]} />
            <S.Text>0</S.Text>
          </S.HeartWrap>
        </S.DateAndLikeWrap>
      </S.Content>
    </S.AwardContainer>
  )
}
