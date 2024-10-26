import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Modal from "@/Components/Common/Modal";
import { useModal } from "@/Context/ModalContext";
import BackgroundImage from "@/Assets/BackgroundImage.svg";

export default function DefaultLayout() {
  const { isOpen } = useModal();

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
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding-bottom: 158px; 
  position: relative;
  z-index: 1;
`;

const BackgroundImageWrap = styled.img`
  position: absolute;
  top: 73px;
  left: 0;
  width: 100%;
  height: 55%;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  z-index: 0;
`;
