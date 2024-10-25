import styled from "styled-components";
import Button from "@/Components/Management/Button";
import { Plus } from "@/Assets";
import { color, font } from "@/Styles";
import ActiveButton from "@/Components/Management/ActiveButton";
import { Club } from "@/Components/Dummy/Club";
import { useModal } from "@/Context/ModalContext";
import { useGetClubList, useModifyClub } from "@/Utils/api/Club";
import { ClubType } from "@/Models/ClubList";
import { DeleteClub } from "@/Components/Modals";

const ClubManage = () => {
  const { openModal } = useModal()
  const { mutate: modifyClub } = useModifyClub();

  const {
    data: clubListData,
    isLoading: clubListLoading,
    isError: clubListError
  } = useGetClubList()

  const handleChangeStatus = (clubId: number) => {
    try {
      modifyClub({ clubId }, {
        onSuccess: () => {
          window.location.reload();
        },
        onError: (error) => {
          console.log(error.message);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickDelete = (clubId: number) => {
    openModal('DeleteClub')
    DeleteClub({clubId})
  };

  return (
    <Content>
      <PageInfoWrap>
        <TextWrap>
          <Title>동아리 관리</Title>
          <Info>학교 동아리 정보를 편집하고 관리할 수 있어요</Info>
        </TextWrap>
        <Button icon={Plus} text="동아리 추가" onClick={() => openModal('AddClub')} />
      </PageInfoWrap>

      <Table>
        {clubListLoading && <div>Loading...</div>}
        {clubListError && <div>Error</div>}
        {clubListData && (
        <>
          <TableHeader>
            <TableTitle>현상태</TableTitle>
            <TableTitle>동아리명</TableTitle>
          </TableHeader>

          <TableContent>
            {Club.clubs.map(({ clubId, clubName, isActive = false }: ClubType) => (
              <Tr key={clubId}>
                <StateText active={isActive}>
                  {isActive ? "활성화" : "비활성화"}
                </StateText>
                <ClubName active={isActive}>{clubName}</ClubName>
                <ButtonWrap>
                  <ActiveButton
                    text="상태 변경"
                    active={true}
                    onClick={() => handleChangeStatus(clubId)}
                  />
                  <ActiveButton
                    text="삭제하기"
                    active={false}
                    onClick={() => handleClickDelete(clubId)}
                  />
                </ButtonWrap>
              </Tr>
            ))}
          </TableContent>
        </>
      )}
      </Table>
    </Content>
  )
}

export default ClubManage;

const Content = styled.div`
width: 75%;
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
width: 70px;
${font.medium14}
color: ${color.white};
`

const StateText = styled.p<{ active: boolean }>`
width: 70px;
${font.regular16}
color: ${({ active }) => active ? color.blue[300] : color.gray[300]};
`

const ClubName = styled.p<{ active: boolean }>`
${font.regular16}
flex-grow: 12;
`