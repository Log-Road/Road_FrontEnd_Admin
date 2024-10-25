import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Modal from "@/Components/Common/Modal";
import { useModal } from "@/Context/ModalContext";

export default function Layout() {
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
`

const Content = styled.div`
display: flex;
justify-content: center;
min-height: calc(100vh - 248px);
`