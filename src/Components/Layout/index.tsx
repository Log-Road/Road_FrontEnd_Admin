import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function Layout() {
  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </>
  )
}

const Content = styled.div`
display: flex;
justify-content: center;
min-height: calc(100vh - 248px);
`