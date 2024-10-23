import * as S from "./style"
import { X, EditNote } from "@/Assets"
import Button from "@/Components/Common/Button";
import { color } from "@/Style";

export default function EditClubModal() {
  return (
    <S.Container>
      <S.CancelWrap>
        <X size={16} color={color.gray[500]}/>
      </S.CancelWrap>
      <S.WriteIconWrap>
        <EditNote size={20} color={color.blue[500]} />
      </S.WriteIconWrap>
      <div>
        <S.Title>동아리명을 수정해주세요</S.Title>
        <S.Info>수정할 동아리 이름을 작성해주세요</S.Info>
      </div>
      <S.InputWrap>
        <S.Label>동아리명</S.Label>
        <S.Input placeholder="동아리 이름을 작성해주세요" />
      </S.InputWrap>
      <Button text="수정하기" active={false} />
    </S.Container>
  )
}