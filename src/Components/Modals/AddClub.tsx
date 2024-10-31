import * as S from "./style";
import { EditNote } from "@/Assets";
import Button from "@/Components/Common/Button";
import LabelInput from "@/Components/Common/LabelInput";
import { color } from "@/Styles";
import { useForm } from "@/Hooks/useForm";
import { useAddClub } from "@/Utils/api/Club";
import { useState } from "react";
import toast from 'react-hot-toast';
import { useModal } from "@/Context/ModalContext";

export default function AddClub() {
  const [isActive, setIsActive] = useState<boolean>(true);
  
  const { form: clubForm, handleChange: clubFormChange } = useForm({ clubName: "" });
  const { clubName } = clubForm;
  
  const { closeModal } = useModal()
  const { mutate } = useAddClub();

  const handleClickSubmit = async () => {
    if (clubName.trim().length > 0) {
      mutate({ isActive, clubName });
      closeModal()
    } else {
      toast.error("동아리 이름을 입력해주세요.");
    }
  };

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
        name="clubName"
        value={clubName}
        label="동아리명"
        placeholder="동아리 이름을 작성해주세요"
        onChange={clubFormChange}
      />
      <Button
        text="추가하기"
        active={clubName.length > 0}
        onClick={handleClickSubmit}
      />
    </>
  );
}
