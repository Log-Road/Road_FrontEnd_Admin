import * as S from "./style"
import { EditNote } from "@/Assets"
import Button from "@/Components/Common/Button"
import LabelInput from "@/Components/Common/LabelInput"
import { color } from "@/Styles"
import { useFrom } from "@/Hooks/useForm"
import { useState } from "react"

export default function AddClub() {

  const [active, setActive] = useState<boolean>(false)

  const {
    form: clubForm,
    setForm: setClubForm,
    handleChange: clubFormChange
  } = useFrom({
    club: '',
  })

  const { club } = clubForm

  const handleClickSubmit = () => {
    setActive(club.length > 0)
  }

  return (
    <>
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
        active={active}
        onClick={handleClickSubmit}
      />
    </>
  )
}