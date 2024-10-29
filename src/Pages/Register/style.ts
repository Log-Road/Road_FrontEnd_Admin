import styled from "styled-components"
import { color, font } from "@/Styles"

export const Container = styled.div`
width: 50vw;
display: flex;
flex-direction: column;
align-items: center;
padding: 80px 0;
gap: 50px;
`

export const Header = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 12px;
`

export const Content = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
padding: 28px 40px 40px;
border-radius: 20px;
background-color: ${color.white};
box-shadow : 0 10px 100px 10px rgba(0, 0, 0, 0.2);
`

export const InfoWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const TagWrap = styled.div`
display: flex;
flex-wrap: wrap;
gap: 8px;
`

export const ButtonWrap = styled.div`
display: flex;
gap: 8px;
`

export const Title = styled.p`
${font.semi24}
color: ${color.white};
`

export const Info = styled.p`
${font.regular12}
color: ${color.white};
`