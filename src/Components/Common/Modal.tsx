import { useRef } from "react";
import { X } from "@/Assets";
import { color } from "@/Styles";
import styled from "styled-components";
import { useModal } from "@/Context/ModalContext";
import {
  AddClub,
  DeleteClub,
  EditStudent,
  PostApprove,
  PostRefuse
} from "@/Components/Modals";

export default function Modal() {
  const { closeModal, modalState, modalData } = useModal();

  const modalRef = useRef<HTMLDivElement>(null);

  const modalOutSideClick = (e: React.MouseEvent) => {
    if (modalRef.current === e.target) {
      closeModal()
    }
  }

  const renderContent = () => {
    switch (modalState) {
      case 'AddClub': return <AddClub />
      case 'DeleteClub': return modalData ? <DeleteClub clubId={modalData} /> : null;
      case 'EditStudent': return <EditStudent />
      case 'PostApprove': return <PostApprove />
      case 'PostRefuse': return <PostRefuse />
      default: return null
    }
  }

  return (
    <Background ref={modalRef} onClick={(e) => modalOutSideClick(e)}>
      <Container onClick={(e) => e.stopPropagation()}>
        <CancelWrap>
          <X
            size={16}
            color={color.gray[500]}
            onClick={closeModal}
          />
        </CancelWrap>
        {renderContent()}
      </Container>
    </Background>
  );
}

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 100;
`;

const Container = styled.div`
min-width: 340px;
max-height: 320px;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 20px 20px 30px;
gap: 12px;
border-radius: 20px;
border: 1.2px solid ${color.gray[200]};
background-color: ${color.white};
`

const CancelWrap = styled.div`
display: flex;
justify-content: flex-end;
`