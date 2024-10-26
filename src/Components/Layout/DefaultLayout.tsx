import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Modal from "@/Components/Common/Modal";
import { useModal } from "@/Context/ModalContext";

export default function DefaultLayout() {
  const { isOpen } = useModal()

  return (
    <Container>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
      {isOpen && <Modal />}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding-bottom: 158px; 
  position: relative;
`