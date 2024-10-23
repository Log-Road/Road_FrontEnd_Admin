import styled from "styled-components";
import { color, font } from "@/Style";

export const Container = styled.div`
min-width: 300px;
max-height: 320px;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 20px 20px 30px;
border-radius: 20px;
border: 1.2px solid ${color.gray[200]};
`

export const CancelWrap = styled.div`
display: flex;
justify-content: flex-end;
`

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