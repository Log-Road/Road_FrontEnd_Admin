import styled from "styled-components"
import { font, color } from "@/Styles"

export const Container = styled.div`
width: 300px;
min-height: fit-content;
height: 330px;
display: flex;
flex-direction: column;
border-radius: 8px;
border: 1px solid ${color.gray[200]};
box-shadow : 0 4px 10px 10px rgba(228, 228, 228, 0.1);
background-color: ${color.white};
overflow: hidden;
`

export const Content = styled.div`
display: flex;
flex-direction: column;
padding: 12px;
gap: 12px;
`

export const Image = styled.img`
width: 300px;
height: 140px;
object-fit: cover;
`

export const ProjectName = styled.p`
${font.medium16}
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
`

export const ProjectInfo = styled.p`
  ${font.regular14}
  color: ${color.gray[500]};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
`;

export const Wrap = styled.div`
width: 100%;
height: 18px;
display: flex;
align-items: center;
gap: 8px;
`

export const TeamType = styled.p`
${font.medium12}
color: ${color.gray[700]};
flex: 0 1 auto;
white-space: nowrap;
`

export const MemberWrap = styled.div<{ width: number }>`
  width: calc(100% - ${({ width }) => width}px);
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;
  gap: 8px;
`;

export const Text = styled.p`
${font.regular12}
color: ${color.gray[500]};
display: inline-block;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`

export const DateAndLikeWrap = styled.div`
display: flex;
justify-content: space-between;
`

export const HeartWrap = styled.div`
display: flex;
gap: 4px;
`