import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import AddClubModal from "@/Pages/ClubManage/Modals/AddClubModal";
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
      {
        isOpen &&
        <ModalWrap>
          <AddClubModal />
        </ModalWrap>
      }
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

const ModalWrap = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(0, 0, 0, 0.2);
`
