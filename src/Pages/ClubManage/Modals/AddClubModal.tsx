import * as S from "./style"
import { X, EditNote } from "@/Assets"
import Button from "@/Components/Common/Button"
import LabelInput from "@/Components/Common/LabelInput"
import { color } from "@/Styles"
import { useFrom } from "@/Hooks/useForm"

export default function AddClubModal() {

  const {
    form: clubForm,
    setForm: setClubForm,
    handleChange: clubFormChange
  } = useFrom({
    club: '',
    name: '',
  })

  const { club, name } = clubForm

  const handleClickAddButton = () => {
    
  }

  return (
    <S.Container>
      <S.CancelWrap>
        <X size={16} color={color.gray[500]} />
      </S.CancelWrap>
      <S.WriteIconWrap>
        <EditNote size={20} color={color.blue[500]} />
      </S.WriteIconWrap>
      <div>
        <S.Title>동아리를 추가해주세요</S.Title>
        <S.Info>새로운 동아리 이름을 작성해주세요</S.Info>
      </div>
      <LabelInput
        type="text"
        name="club"
        value={club}
        label="동아리명"
        placeholder="동아리 이름을 작성해주세요"
        onChange={clubFormChange}
      />
      <Button
        text="추가하기"
        active={false}
        onClick={handleClickAddButton}
      />
    </S.Container>
  )
}