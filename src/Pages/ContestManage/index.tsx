import styled from "styled-components";
import Button from "@/Components/Management/Button";
import { Plus } from "@/Assets";
import { color, font } from "@/Styles";
import ActiveButton from "@/Components/Management/ActiveButton";
import { Contest } from "@/Components/Dummy/Contest";
import { ContestType } from "@/Models/Manage";
import { covertISOtoKST } from "@/Utils/Date";
import { ContestStatus } from "@/Utils/Status";
import Recent from "@/Pages/ContestManage/Recent";
import { useNavigate } from "react-router-dom";

type ContestStatusType = "ONGOING" | "IN_PROGRESS" | "PENDING_AWARD" | "CLOSED";

const RenderContestButtons = ({ status }: { status: ContestStatusType }) => {
  switch (status) {
    case "ONGOING":
    case "IN_PROGRESS":
      return (
        <>
          <ActiveButton text="수정하기" active={true} onClick={() => { }} />
          <ActiveButton text="삭제하기" active={false} onClick={() => { }} />
        </>
      );
    case "PENDING_AWARD":
      return <ActiveButton text="시상하기" active={true} onClick={() => { }} />;
    case "CLOSED":
      return <ActiveButton text="결과보기" active={true} onClick={() => { }} />;
    default:
      return null;
  }
};

const ContestManage = () => {

  const navigation = useNavigate()

  return (
    <Container>
      <Header>
        <HeaderText>
          <Title>대회 관리</Title>
          <Info>대회를 개최하고 진행 및 관리 할 수 있어요</Info>
        </HeaderText>
        <Button
          icon={Plus}
          text="대회 추가"
          onClick={() => navigation('/register')} />
      </Header>

      <Recent />

      <Table>
        <TableHeader>
          <TableColumn
            width="170px"
            style={{ textAlign: "center" }}
          >
            대회 일정
          </TableColumn>
          <TableColumn width="60px">진행상황</TableColumn>
          <TableColumn width="200px">대회 이름</TableColumn>
        </TableHeader>

        <TableBody>
          {Contest.data.list.map(({ id, status, name, startDate, endDate }: ContestType) => (
            <TableRow key={id}>
              <TableData>
                <DateText>{covertISOtoKST(startDate)} ~ {covertISOtoKST(endDate)}</DateText>
                <StateText active={status === "PENDING_AWARD" || status === "IN_PROGRESS"}>
                  {ContestStatus(status)}
                </StateText>
                <Text>{name}</Text>
              </TableData>

              <ButtonWrap>
                <RenderContestButtons status={status} />
              </ButtonWrap>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default ContestManage;

const Container = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const HeaderText = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TableHeader = styled.div`
  display: flex;
  gap: 100px;
  padding: 12px 50px;
  border-radius: 4px;
  background-color: ${color.blue[500]};
`;

const TableBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TableRow = styled.div`
  display: flex;
  padding: 12px 50px;
  justify-content: space-between;
  border-bottom: 1px solid ${color.gray[200]};
`;

const TableData = styled.div`
  display: flex;
  gap: 100px;
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 8px;
`;

const Title = styled.p`
  ${font.semi24}
`;

const Info = styled.p`
  ${font.semi12}
  color: ${color.gray[500]};
`;

const TableColumn = styled.p<{ width: string }>`
  width: ${({ width }) => width};
  ${font.medium14}
  color: ${color.white};
`;

const StateText = styled.p<{ active: boolean }>`
  width: 60px;
  ${font.regular16}
  color: ${({ active }) => (active ? color.blue[300] : color.gray[500])};
`;

const Text = styled.p`
  width: 200px;
  ${font.regular16}
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const DateText = styled.p`
  width: 170px;
  ${font.regular14}
  color: ${color.gray[500]};
`