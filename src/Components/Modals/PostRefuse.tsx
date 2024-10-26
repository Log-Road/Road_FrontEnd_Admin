import * as S from "./style"
import styled from "styled-components"
import { Cancel } from "@/Assets"
import { color } from "@/Styles"
import Button from "@/Components/Common/Button"

export default function PostRefuse() {
  return (
    <S.Content>
      <S.InfoWrap>
        <Cancel size={36} color={color.red[200]} />
        <S.TextWrap>
          <S.Title>게시물 업로드 승인하시겠습니까?</S.Title>
          <S.detailText>아래 확인 버튼을 누르면 프로젝트가 업로드 됩니다.</S.detailText>
        </S.TextWrap>
      </S.InfoWrap>

      <TextArea placeholder="반려 사유를 작성해주세요 (100자)" />

      <S.Button>
        <Button
          text="취소"
          type="PREV"
          onClick={() => { }}
        />
        <Button
          text="확인"
          type="CANCEL"
          onClick={() => { }}
        />
      </S.Button>
    </S.Content>
  )
}

const TextArea = styled.textarea`
width: 100%;
height: 80px;
padding: 12px;
border-radius: 8px;
border: none;
resize: none;
background-color: ${color.gray[100]};
`