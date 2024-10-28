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
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 30px;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 90px 0;
  min-height: calc(100vh - 180px);
`