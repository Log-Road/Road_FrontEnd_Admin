import styled from "styled-components";
import Button from "@/Components/Management/Button";
import { Plus, Exchange } from "@/Assets";
import { color, font } from "@/Styles";
import ActiveButton from "@/Components/Management/ActiveButton";
import { Person } from "@/Components/Dummy/Person";
import { PersonType } from "@/Models/Manage";
import { PersonStatus } from "@/Utils/Status";
import SearchInfo from "@/Pages/PersonManage/SearchInfo";

const PersonManage = () => {

  return (
    <Container>
      <Header>
        <HeaderText>
          <Title>인원 정보 관리</Title>
          <Info>학생 정보를 편집하고 관리할 수 있어요</Info>
        </HeaderText>
        <ButtonWrap>
          <Button icon={Plus} text="인원 문서 추가하기" onClick={() => { }} />
          <Button icon={Exchange} text="인원 수정 추가하기" onClick={() => { }} />
        </ButtonWrap>
      </Header>

      <SearchInfo />

      <Table>
        <TableHeader>
          {["학년", "반", "번호", "이름", "상태"].map((value) => (
            <TableTitle>{value}</TableTitle>
          ))}
        </TableHeader>

        <TableBody>
          {Person.arr.map(({ personId, grade, class: classId, number, name, status }: PersonType) => (
            <TableRow key={personId}>
              <TableTextWrap>
                <Text>{grade}</Text>
                <Text>{classId}</Text>
                <Text>{number}</Text>
                <Text>{name}</Text>

                <StateText active={status === "ENROLL"}>
                  {PersonStatus(status)}
                </StateText>
              </TableTextWrap>

              <ActiveButton
                text="수정하기"
                active={false}
                onClick={() => { }}
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  )
}

export default PersonManage;

const Container = styled.div`
width: 75%;
display: flex;
flex-direction: column;
gap: 20px;
`

const Header = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`

const HeaderText = styled.div`
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
gap: 80px;
padding: 12px 70px;
border-radius: 4px;
background-color: ${color.blue[500]};
`

const TableBody = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`

const TableRow = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding: 12px 70px;
border-bottom: 1px solid ${color.gray[200]};
`

const TableTextWrap = styled.div`
display: flex;
gap: 80px;
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
width: 70px;
text-align: center;
${font.medium14}
color: ${color.white};
`

const StateText = styled.p<{ active: boolean }>`
width: 70px;
text-align: center;
${font.regular16}
color: ${({ active }) => active ? color.blue[300] : color.gray[300]};
`

const Text = styled.p`
width: 70px;
text-align: center;
${font.regular16}
`