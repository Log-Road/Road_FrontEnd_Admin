import styled from "styled-components";
import Button from "@/Components/Management/Button";
import { Plus } from "@/Assets";
import { color, font } from "@/Styles";
import ActiveButton from "@/Components/Management/ActiveButton";
import { ContestType } from "@/Models/Manage";
import { covertISOtoKST } from "@/Utils/Date";
import { ContestStatus } from "@/Utils/Status";
import Recent from "@/Pages/ContestManage/Recent";
import { useNavigate } from "react-router-dom";
import { useGetContestList, useGetContestDetail } from "@/Utils/api/Contest";
import { useEffect, useState } from "react";
import { useModal } from "@/Context/ModalContext";
import useContestStore from "@/Store/useContestStore";

type ContestStatusType = "ONGOING" | "IN_PROGRESS" | "PENDING_AWARD" | "CLOSED";

const RenderContestButtons = ({
  status,
  contestId,
  handleClickModify
}: {
  status: ContestStatusType,
  contestId: string,
  handleClickModify: (contestId: string) => void
}) => {

  const navigation = useNavigate()

  const { openModal } = useModal()

  const handleClickDelete = (contestId: string) => {
    openModal("DeleteContest", contestId)
  }

  switch (status) {
    case "ONGOING":
    case "IN_PROGRESS":
      return (
        <>
          <ActiveButton text="수정하기" active={true} onClick={() => handleClickModify(contestId)} />
          <ActiveButton text="삭제하기" active={false} onClick={() => handleClickDelete(contestId)} />
        </>
      );
    case "PENDING_AWARD":
      return <ActiveButton text="시상하기" active={true} onClick={() => navigation(`/award/${contestId}`)} />;
    case "CLOSED":
      return <ActiveButton text="결과보기" active={true} onClick={() => { }} />;
    default:
      return null;
  }
};

const ContestManage = () => {
  const navigate = useNavigate()
  const [page, setPage] = useState<string>("0")
  const [selectId, setSelectId] = useState<string>("")

  const {
    data: contestListData,
    isLoading: contestListLoading,
    isError: contestListError
  } = useGetContestList(page)

  const { setForm } = useContestStore()
  const { openModal } = useModal()
  const { data } = useGetContestDetail(selectId || '');

  const handleClickContest = (id: string) => {
    setSelectId(id)
    openModal('InquiryContest', id)
  }

  const handleClickModify = (id: string) => {
    setSelectId(id)
    navigate(`/register?contestId=${id}`)
  }

  useEffect(() => {
    if (data) {
      setForm(data.data[0]);
      console.log(data)
    }
  }, [data, setForm]);

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
          onClick={() => navigate('/register')} />
      </Header>

      <Recent />

      <Table>
        {contestListLoading && <div>Loading...</div>}
        {contestListError && <div>Error</div>}
        {contestListData && (
          <>
            <TableHeader>
              <TableColumn
                width="175px"
                style={{ textAlign: "center" }}
              >
                대회 일정
              </TableColumn>
              <TableColumn width="60px">진행상황</TableColumn>
              <TableColumn width="200px">대회 이름</TableColumn>
            </TableHeader>

            <TableBody>
              {contestListData.data.list.map(({ id, status, name, startDate, endDate }: ContestType) => (
                <TableRow key={id}>
                  <TableData>
                    <DateText>{covertISOtoKST(startDate)} ~ {covertISOtoKST(endDate)}</DateText>
                    <StateText active={status === "PENDING_AWARD" || status === "IN_PROGRESS"}>
                      {ContestStatus(status)}
                    </StateText>
                    <Text onClick={() => handleClickContest(id)}>{name}</Text>
                  </TableData>

                  <ButtonWrap>
                    <RenderContestButtons
                      status={status}
                      contestId={id}
                      handleClickModify={handleClickModify}
                    />
                  </ButtonWrap>
                </TableRow>
              ))}
            </TableBody>
          </>
        )}
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

  &:hover {
    color: ${color.gray[500]};
  }
`;

const DateText = styled.p`
  width: 175px;
  ${font.regular14}
  color: ${color.gray[500]};
`