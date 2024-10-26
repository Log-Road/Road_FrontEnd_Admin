import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Modal from "@/Components/Common/Modal";
import { useModal } from "@/Context/ModalContext";
import BackgroundImage from "@/Assets/BackgroundImage.svg"

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
      <BackgroundImageWrap />
    </Container>
  )
}

const Container = styled.div`
width: 100%;
height: 100vh;
position: relative;
background-color: #F6F6F6;
display: flex;
flex-direction: column;
align-items: center;
`

const Content = styled.div`
display: flex;
justify-content: center;
min-height: calc(100vh - 248px);
z-index: 10;
`

const BackgroundImageWrap = styled.img`
position: absolute;
top: 90px;
left: 0;
width: 100%;
height: 55%;
background-image: url(${BackgroundImage});
background-size: cover;
background-position: center;
z-index: 0;
`