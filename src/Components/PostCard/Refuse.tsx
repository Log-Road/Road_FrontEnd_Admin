import { Shield, Plane, Delete } from "@/Assets";
import Button from "@/Components/Common/Button";
import { useModal } from "@/Context/ModalContext";
import { color, font } from "@/Styles";
import styled from "styled-components";

type RefuseType = "Refuse" | "CancelRefuse" | "CancelApprove" | "Delete";

interface PropsType {
  icon: JSX.Element,
  text: string,
  button: string,
}

const typeDetails: Record<RefuseType, PropsType> = {
  Refuse: {
    icon: <Shield color={color.red[200]} />,
    text: "제출한 프로젝트를 반려하시겠습니까? 반려된 프로젝트는 피드백과 함께 다시 전달됩니다.",
    button: "반려하기",
  },
  CancelRefuse: {
    icon: <Plane color={color.red[200]} />,
    text: "반려한 프로젝트를 취소하시겠습니까? 아래 버튼을 눌러주세요",
    button: "반려 취소하기",
  },
  CancelApprove: {
    icon: <Plane color={color.red[200]} />,
    text: "승인한 프로젝트를 취소하시겠습니까? 아래 버튼을 눌러주세요",
    button: "승인 취소하기",
  },
  Delete: {
    icon: <Delete color={color.red[200]} />,
    text: "프로젝트를 삭제하시겠습니까? 제출한 프로젝트가 영구적으로 삭제됩니다.",
    button: "삭제하기",
  },
};

export default function Refuse({ type }: { type: RefuseType }) {
  const { icon, text, button } = typeDetails[type] || { icon: null, text: "", button: "" };

  const { openModal } = useModal()

  const handleClick = () => {
    if (type === "Refuse") {
      openModal("PostRefuse")
    }
  }

  return (
    <Container>
      <InfoWrap>
        {icon}
        <Text>{text}</Text>
      </InfoWrap>
      <Button text={button} type="CANCEL" onClick={handleClick} />
    </Container>
  );
}

const Container = styled.div`
  width: 180px;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 8px;
  background-color: ${color.white};
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Text = styled.div`
  ${font.regular14}
  color: ${color.gray[700]};
`;
