import styled from "styled-components"
import { Bell, Search, User } from "@/Assets";
import { color, font } from "@/Styles";
import { useNavigate } from "react-router-dom";
import { HeaderInformation } from "@/Constants";

export default function Header() {
  const navigate = useNavigate()
  const userName = "홍길동"

  return (
    <Container>
      <Content>
        <LogoAndListWrap>
          <Logo onClick={() => navigate("/main")}>ROAD</Logo>
          <ListWrap>
            {HeaderInformation.map(({name, path, text}) =>
              <Text
                key={name}
                onClick={() => navigate(path)}
              >
                {text}
              </Text>
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