import styled from "styled-components"
import { Bell, Search, User } from "@/Assets";
import { color, font } from "@/Styles";

export default function Header() {
  const list = ["대회관리", "인원관리", "동아리 관리"];
  const userName = "홍길동"

  return (
    <Container>
      <Content>
        <LogoAndListWrap>
          <Logo>ROAD</Logo>
          <ListWrap>
            {list.map((value) =>
              <Text key={value}>{value}</Text>
            )}
          </ListWrap>
        </LogoAndListWrap>
        <ListWrap>
          <IconWrap>
            <Bell color={color.gray[500]} />
            <Search color={color.gray[500]} />
            <User color={color.gray[500]} />
          </IconWrap>
          <NameWrap>
            <Text>{userName} 님</Text>
          </NameWrap>
        </ListWrap>
      </Content>
    </Container>
  );
};

const Container = styled.div`
position: fixed;
width: 100%;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${color.white};
z-index: 1000;
`

const Content = styled.div`
width: 80%;
display: flex;
justify-content: space-between;
align-items: center;
`

const LogoAndListWrap = styled.div`
display: flex;
align-items: center;
gap: 40px;
`

const ListWrap = styled.div`
display: flex;
gap: 20px;
`

const IconWrap = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const NameWrap = styled.div`
  @media screen and (max-width: 1023px) {
    display: none;
  }
`

const Logo = styled.p`
${font.semi24}
`

const Text = styled.p`
${font.medium16}
color: ${color.gray[500]};
`