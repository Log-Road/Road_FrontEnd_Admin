import Button from "@/Components/Common/Button"
import * as S from "./style"
import { Check } from "@/Assets"
import { color } from "@/Styles"

export default function PostApprove() {
  return (
    <S.Content>
      <S.InfoWrap>
        <Check size={36} color={color.blue[300]} />
        <S.TextWrap>
          <S.Title>게시물 업로드 승인하시겠습니까?</S.Title>
          <S.detailText>아래 확인 버튼을 누르면 프로젝트가 업로드 됩니다.</S.detailText>
        </S.TextWrap>
      </S.InfoWrap>
      <S.Button>
        <Button
          text="취소"
          type="PREV"
          onClick={() => { }}
        />
        <Button
          text="확인"
          onClick={() => { }}
        />
      </S.Button>
    </S.Content>
  )
}