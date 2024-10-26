import styled from "styled-components"
import * as S from "./style"
import Button from "@/Components/Common/Button"
import { font, color } from "@/Styles"
import Tag from "@/Components/Register/AwardTag"

const Check = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>대회 정보 확인하기</S.Title>
        <S.InfoWrap>
          <S.Info>작성하신 대회에 대한 설명을 확인해주세요</S.Info>
          <S.Info>확인 버튼을 누르면 대회가 등록됩니다</S.Info>
        </S.InfoWrap>
      </S.Header>

      <S.Content>
        <Column>
          <ContestTitle>프로젝트 이름</ContestTitle>
          <Label>2024.04.05 ~ 2024.04.12</Label>
        </Column>
        <Column>
          <InfoWrap>
            <Label>대상</Label>
            <Description>대덕소프트웨어마이스터고등학교 전체 학생</Description>
          </InfoWrap>
          <InfoWrap>
            <Label>장소</Label>
            <Description>대덕소프트웨어마이스터고등학교 우정관</Description>
          </InfoWrap>
        </Column>
        <Column>
          <Label>대회 목적</Label>
          <Description>
            아슬라 별하 이플 함초롱하다 사과 우리는 아리아 소솜 그루잠 여우비 달볓
            우리는 노트북 나래 아슬라 감또개 아련 여우비 도담도담 컴퓨터 가온누리
            나비잠 사과 다솜 별하 나래 도서 아련 아리아 다솜 도서 가온누리 나래 산들림
            별빛 아름드리 곰다시 미리내 감사합니다 비나리
          </Description>
        </Column>
        <AwardSection>
          <AwardTitle>시상할 상 목록</AwardTitle>
          <S.TagWrap>
            <Tag text="금상" />
          </S.TagWrap>
        </AwardSection>

      </S.Content>
      <S.ButtonWrap>
        <Button
          width="200px"
          text="뒤로가기"
          type="PREV"
          onClick={() => { }}
        />
        <Button
          width="200px"
          text="확인"
          onClick={() => { }}
        />
      </S.ButtonWrap>
    </S.Container>
  )
}

export default Check

const InfoWrap = styled.div`
display: flex;
gap: 12px;
`

const Column = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
`

const AwardSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const ContestTitle = styled.p`
${font.medium24}
`

const Description = styled.p`
${font.regular14}
color: ${color.gray[500]};
`

const Label = styled.p`
${font.medium14}
color: ${color.gray[700]};
`

const AwardTitle = styled.p`
${font.medium18}
`