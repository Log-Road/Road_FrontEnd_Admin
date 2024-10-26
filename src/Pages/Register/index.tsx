import styled from "styled-components"
import Input from "@/Components/Common/Input"
import Calendar from "@/Pages/Register/Calendar"
import DropBox from "@/Components/Common/DropBox"
import { Plus } from "@/Assets"
import { color, font } from "@/Styles"
import RemovableTag from "@/Components/Register/RemovableTag"
import Button from "@/Components/Common/Button"

const Register = () => {
  const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  return (
    <Container>
      <Header>
        <Title>대회 등록하기</Title>
        <InfoWrap>
          <Info>대회에 대한 설명과 필수 정보를 입력해주세요</Info>
          <Info>등록 버튼을 누른 직후 대회가 진행됩니다</Info>
        </InfoWrap>
      </Header>

      <Content>
        <Row>
          <FillText>대회명</FillText>
          <Input placeholder="대회명을 입력해주세요" />
        </Row>
        <Row>
          <FillText>대상</FillText>
          <Input placeholder="대상을 입력해주세요" />
        </Row>
        <Row>
          <FillText>장소</FillText>
          <Input placeholder="장소를 입력해주세요" />
        </Row>
        <Row>
          <FillText>대회 일정</FillText>
          <Wrap>
            <Calendar text="시작 일을 입력해주세요" />
            <Calendar text="종료 일을 입력해주세요" />
          </Wrap>
        </Row>
        <Row>
          <FillText>대회 목적</FillText>
          <TextArea placeholder="대회 목적을 간단하게 작성해주세요" />
        </Row>
        <Row>
          <FillText>상 등록</FillText>
          <AwardWrap>
            <Wrap>
              <Input placeholder="상 이름을 입력해주세요" />
              <DropBox width='180px' text="개수를 선택해주세요" options={options} />
              <PlusButton>
                <Plus
                  size={18}
                  color={color.gray[600]}
                  onClick={() => { }}
                />
              </PlusButton>
            </Wrap>
            <TagWrap>
              <RemovableTag text="금상" count="3" />
            </TagWrap>
          </AwardWrap>
        </Row>
      </Content>

      <ButtonWrap>
        <Button
          width="200px"
          text="뒤로가기"
          type="PREV"
          onClick={() => { }}
        />
        <Button
          width="200px"
          text="다음"
          onClick={() => { }}
        />
      </ButtonWrap>
    </Container>
  )
}

export default Register

const Container = styled.div`
width: 50vw;
display: flex;
flex-direction: column;
align-items: center;
padding: 100px 0;
gap: 50px;
`

const InfoWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Header = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 12px;
`

const Content = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
padding: 28px 40px 32px;
border-radius: 20px;
background-color: ${color.white};
`

const Row = styled.div`
display: flex;
`

const Wrap = styled.div`
width: 100%;
gap: 8px;
display: flex;
justify-content: space-between;
align-items: center;
`

const TextArea = styled.textarea`
width: 100%;
height: 120px;
border: none;
padding: 8px 16px;
border-radius: 4px;
resize: none;
background-color: ${color.gray[100]};
`

const AwardWrap = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 8px;
`

const TagWrap = styled.div`
display: flex;
flex-wrap: wrap;
`

const PlusButton = styled.button`
border: none;
border-radius: 8px;
padding: 4px 8px;
`

const ButtonWrap = styled.div`
  display: flex;
  gap: 8px;
`

const FillText = styled.p`
width: 240px;
${font.medium14}
`

const Title = styled.p`
${font.semi24}
color: ${color.white};
`

const Info = styled.p`
${font.regular12}
color: ${color.white};
`