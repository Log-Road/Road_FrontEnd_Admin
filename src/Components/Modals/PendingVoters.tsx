import { NonParticipants } from "@/Components/Dummy/NonParticipants"
import { color, font } from "@/Styles"
import styled from "styled-components"

export default function PendingVoters() {
  return (
    <>
      <Container>
        {
          NonParticipants.list.map(({ id, name, number, category }) => (
            <PersonWrap key={id}>
              <Person>
                <Name>{name}</Name>
                <Category>{category === "Student" ? "학생" : "선생님"}</Category>
              </Person>
              <StudentId>{number}</StudentId>
            </PersonWrap>
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

const PersonWrap = styled.div`
display: flex;
justify-content: space-between;
padding: 8px 0;
`

const Person = styled.div`
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