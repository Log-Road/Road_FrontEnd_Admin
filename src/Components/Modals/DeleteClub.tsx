import { X, NoMassage } from "@/Assets"
import Button from "@/Components/Common/Button"
import styled from "styled-components"
import { color, font } from "@/Styles"

export default function DeleteClub() {
  return (
    <>
      <WriteIconWrap>
        <NoMassage size={20} color={color.red[300]} />
      </WriteIconWrap>
      <div>
        <Title>동아리를 삭제하시겠습니까?</Title>
        <Info>삭제 시 동아리의 모든 데이터가 사라집니다</Info>
      </div>
      <Button text="확인" type="CANCEL" />
    </>
  )
}

const WriteIconWrap = styled.div`
width: 55px;
height: 55px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
background-color: ${color.red[100]};
`

const Title = styled.p`
${font.medium18}
`

const Info = styled.p`
${font.regular12}
color: ${color.gray[600]};
`