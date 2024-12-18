import { ReactNode, createContext, useContext, useState } from "react";

export type ModalStateType =
  | ''
  | 'AddClub'
  | 'DeleteClub'
  | 'EditStudent'
  | 'PostApprove'
  | 'PostRefuse'
  | 'InquiryContest'
  | 'DeleteContest'
  | 'Award'
  | 'PendingVoters'
  ;

type ModalType = {
  modalState: ModalStateType,
  modalData: string | null,
  isOpen: boolean,
  openModal: (state: ModalStateType, data: string | null) => void,
  closeModal: () => void
}

export const ModalContext = createContext<ModalType | undefined>(undefined)

const ModalProvider = ({ children }: { children: ReactNode }) => {

  const [isOpen, setIsOpen] = useState(false)
  const [modalState, setModalState] = useState<ModalStateType>('')
  const [modalData, setModalData] = useState<string | null>(null)

  const openModal = (state: ModalStateType, data: string | null) => {
    setModalState(state)
    setModalData(data || null);
    setIsOpen(true)
  }

  const closeModal = () => setIsOpen(false)

  return (
    <ModalContext.Provider value={{ modalState, modalData, isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error("모달을 띄울 수 없습니다.")
  }
  return context
}