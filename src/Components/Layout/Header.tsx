import styled from "styled-components"
import { Bell, Search, User } from "@/Assets";
import { color, font } from "@/Styles";

export default function Header() {
  const list = ["대회관리", "인원관리", "동아리 관리"];
  const userName = "홍길동"

  return (
    <Container>
      <LogoAndListWrap>
        <Logo>ROAD</Logo>
        <ListWrap>
          {list.map((value) =>
            <Text key={value}>{value}</Text>
          )}
        </ListWrap>
      </LogoAndListWrap>
      <ListWrap>
        <Bell color={color.gray[500]} />
        <Search color={color.gray[500]} />
        <User color={color.gray[500]} />
        <Text>{userName} 님</Text>
      </ListWrap>
    </Container>
  );
};

const Container = styled.div`
width: 100%;
height: 90px;
padding: 20px 200px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: white;
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

const Logo = styled.p`
${font.semi24}
`

const Text = styled.p`
${font.medium16}
color: ${color.gray[500]};
`