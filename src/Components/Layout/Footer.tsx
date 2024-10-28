import { Logo } from "@/Assets"
import styled from "styled-components"
import { FooterInformation } from "@/Constants"
import { color, font } from "@/Styles"

export default function Footer() {
  return (
    <Container>
      <Logo />
      <InfoWrap>
        {FooterInformation.map(({ title, info }, index) => (
          <Box key={index}>
            <Title>{title}</Title>
            <Info>{info}</Info>
          </Box>
        ))}
      </InfoWrap>
    </Container>
  )
}

const Container = styled.div`
width: 100%;
height: 180px;
display: flex;
flex-direction: column;
padding: 32px 70px;
gap: 18px;
background-color: ${color.gray[800]};
`

const InfoWrap = styled.div`
display: flex;
gap: 50px;
`

const Box = styled.div`
display: flex;
flex-direction: column;
gap: 2px;
`

const Title = styled.p`
${font.regular16}
color: ${color.gray[300]};
`

const Info = styled.p`
${font.regular16}
color: ${color.gray[100]};
`