import { Approval } from "@/Assets"
import Button from "@/Components/Common/Button"
import { useModal } from "@/Context/ModalContext"
import { color, font } from "@/Styles"
import styled from "styled-components"

export default function Approve() {
  const { openModal } = useModal()

  return (
    <Container>
      <InfoWrap>
        <Approval color={color.blue[300]} />
        <Text>제출한 프로젝트를 승인하시겠습니까? 검토 후 아래 버튼을 눌러 최종 승인해주세요.</Text>
      </InfoWrap>
      <Button text="승인하기" onClick={() => openModal("PostApprove", null)}/>
    </Container>
  )
}

const Container = styled.div`
width: 180px;
padding: 20px 16px;
display: flex;
flex-direction: column;
gap: 24px;
border-radius: 8px;
background-color: ${color.white};
`

const InfoWrap = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
`

const Text = styled.div`
${font.regular14}
color: ${color.gray[700]};
`