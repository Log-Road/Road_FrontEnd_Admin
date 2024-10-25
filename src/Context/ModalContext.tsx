import { ReactNode, createContext, useContext, useState } from "react";

export type ModalStateType =
  | ''
  | 'AddClub'
  | 'EditClub'
  | 'DeleteClub';

type ModalType = {
  modalState: ModalStateType,
  isOpen: boolean,
  openModal: (state: ModalStateType) => void,
  closeModal: () => void
}

export const ModalContext = createContext<ModalType | undefined>(undefined)

const ModalProvider = ({ children }: { children: ReactNode }) => {

  const [isOpen, setIsOpen] = useState(false)
  const [modalState, setModalState] = useState<ModalStateType>('')

  const openModal = (state: ModalStateType) => {
    setModalState(state)
    setIsOpen(true)
  }

  const closeModal = () => setIsOpen(false)

  return (
    <ModalContext.Provider value={{ modalState, isOpen, openModal, closeModal }}>
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