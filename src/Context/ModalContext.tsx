import { ReactNode, createContext, useContext, useState } from "react";

type ModalType = {
  isOpen: boolean,
  openModal: () => void,
  closeModal: () => void
}

export const ModalContext = createContext<ModalType | undefined>(undefined)

const ModalProvider = ({children}: {children: ReactNode}) => {
  
  const [isOpen, setIsOpen] = useState(false)
  
  const openModal = () => setIsOpen(true)

  const closeModal = () => setIsOpen(false)
  
  return (
    <ModalContext.Provider value={{isOpen, openModal, closeModal}}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider

export const useModal = () => {
  const context = useContext(ModalContext)
  if(!context) {
    throw new Error("모달을 띄울 수 없습니다.")
  }
  return context
}