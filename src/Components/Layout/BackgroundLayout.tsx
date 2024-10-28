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
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 30px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 90px 0;
  min-height: calc(100vh - 180px);
  z-index: 1;
`;

const BackgroundImageWrap = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70%;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  z-index: 0;
`;
