import styled from "styled-components";
import Button from "../../Components/Management/Button";
import { Plus } from "../../Assets"
import { color, font } from "../../Style";
import ActiveButton from "../../Components/Management/ActiveButton";

const ClubManage = () => {
  return (
    <Content>
      <PageInfoWrap>
        <TextWrap>
          <Title>동아리 관리</Title>
          <Info>학교 동아리 정보를 편집하고 관리할 수 있어요</Info>
        </TextWrap>
        <Button icon={Plus} text="동아리 추가" />
      </PageInfoWrap>

      <Table>
        <TableHeader>
          <TableTitle>현상태</TableTitle>
          <TableTitle>동아리명</TableTitle>
        </TableHeader>

        <TableContent>
          <Tr>
            <StateText>활성화</StateText>
            <ClubName>Log</ClubName>
            <ButtonWrap>
              <ActiveButton text="상태 변경" active={true} />
              <ActiveButton text="삭제하기" active={false} />
            </ButtonWrap>
          </Tr>
          <Tr>
            <StateText>활성화</StateText>
            <ClubName>Logadfdgshdj</ClubName>
            <ButtonWrap>
              <ActiveButton text="상태 변경" active={true} />
              <ActiveButton text="삭제하기" active={false} />
            </ButtonWrap>
          </Tr>
        </TableContent>
      </Table>
    </Content>
  )
}

export default ClubManage;

const Content = styled.div`
width: 1220px;
display: flex;
flex-direction: column;
gap: 20px;
`

const PageInfoWrap = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`

const TextWrap = styled.div`
display: flex;
align-items: flex-end;
gap: 8px;
`

const Table = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`

const TableHeader = styled.div`
display: flex;
gap: 100px;
padding: 12px 70px;
border-radius: 4px;
background-color: ${color.blue[500]};
`

const TableContent = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`

const Tr = styled.div`
display: flex;
padding: 12px 70px;
gap: 100px;
justify-content: space-between;
border-bottom: 1px solid ${color.gray[200]};
`

const ButtonWrap = styled.div`
display: flex;
gap: 8px;
`

const Title = styled.p`
${font.semi24}
`

const Info = styled.p`
${font.semi12}
color: ${color.gray[500]};
`

const TableTitle = styled.p`
${font.medium14}
color: ${color.white};
`

const StateText = styled.p`
${font.regular16}
color: ${color.blue[300]};
`

const ClubName = styled.p`
${font.regular16}
flex-grow: 1;
`