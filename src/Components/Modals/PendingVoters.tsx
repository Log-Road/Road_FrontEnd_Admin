import { NonParticipants } from "@/Components/Dummy/NonParticipants"
import { color, font } from "@/Styles"
import { useGetUnVoteUsers } from "@/Utils/api/Contest/award"
import styled from "styled-components"

export default function PendingVoters({ contestId }: { contestId: string }) {

  const { data } = useGetUnVoteUsers(contestId, "Student");


  return (
    <>
      <Container>
        {
          data?.data.list.map(({ id, name, number, category }) => (
            <VoterItem key={id}>
              <VoterDetails>
                <Name>{name}</Name>
                <StudentId>{number}</StudentId>
              </VoterDetails>
              <Category>{category === "Student" ? "학생" : "선생님"}</Category>
            </VoterItem>
          ))
        }
      </Container>
    </>
  )
}

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`

const VoterItem = styled.div`
display: flex;
justify-content: space-between;
padding: 8px 20px;
`

const VoterDetails = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 4px;
`

const Name = styled.p`
${font.medium16}
`

const Category = styled.p`
${font.regular14}
color: ${color.gray[500]};
`

const StudentId = styled.p`
${font.regular16}
color: ${color.gray[700]};
`