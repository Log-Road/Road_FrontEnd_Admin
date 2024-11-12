import { color, font } from "@/Styles"
import styled from "styled-components"
import { X, NoNotice } from "@/Assets"
import { useModal } from "@/Context/ModalContext"

export default function Notice() {

  const { closeModal } = useModal()

  return (
    <Container>
      <TopWrapper>
        <Title>알림 및 공지</Title>
        <X
          size={16}
          color={color.gray[500]}
          onClick={() => closeModal()}
        />
      </TopWrapper>
      <Content>
        <NoNotice
          size={50}
          color={color.gray[300]}
        />
        <Message>받은 알람이 없습니다</Message>
      </Content>
    </Container>
  )
}

const Container = styled.div`
position: absolute;
top: 0;
left: 0;
width: 340px;
height: 380px;
padding: 24px 32px;
border-radius: 20px;
border: 1px solid ${color.gray[200]};
box-shadow : 0 10px 100px 10px rgba(0, 0, 0, 0.2);
background-color: ${color.white};
display: flex;
flex-direction: column;
`

const TopWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const Title = styled.p`
${font.medium16}
`

const Content = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 8px;
`

const Message = styled.p`
${font.regular16}
color: ${color.gray[500]};
`