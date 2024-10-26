import styled from "styled-components";
import { color, font } from "@/Styles";

export const WriteIconWrap = styled.div`
width: 55px;
height: 55px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
background-color: ${color.blue[100]};
`

export const Title = styled.p`
${font.medium18}
`

export const Info = styled.p`
${font.regular16}
color: ${color.gray[500]};
`

export const InputWrap = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
`

export const Label = styled.p`
${font.regular12}
color: ${color.gray[600]};
`

export const Input = styled.input`
width: 100%;
padding: 8px 12px;
border: none;
border-radius: 4px;
border: 1px solid ${color.gray[200]};
`

export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
` 

export const InfoWrap = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
align-items: center;
`

export const Button = styled.div`
width: 100%;
display: flex;
gap: 8px;
`

export const TextWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const detailText = styled.div`
${font.regular14}
color: ${color.gray[600]};
`