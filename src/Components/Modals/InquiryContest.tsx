import styled from "styled-components"
import { font, color } from "@/Styles"
import Tag from "@/Components/Common/Tag"
import useContestStore from "@/Store/useContestStore"
import { ContestStatus } from "@/Utils/Status"

const Inquiry = () => {

  const { form } = useContestStore()

  const covertUTCtoDate = (utcDate: string) => {
    const kor = new Date(utcDate)
    kor.setHours(kor.getHours() + 9)

    const newDate = kor.toLocaleString()
    const result = newDate.substring(0, 10)

    return result
  }

  return (
    <Content>
      <TopWrap>
        <ProjectName>{form.name}</ProjectName>
        <DateText>{covertUTCtoDate(form.startDate)} ~ {covertUTCtoDate(form.endDate)}</DateText>
      </TopWrap>
      <Column>
        <InfoWrap>
          <Label>대상</Label>
          <Description>{form.audience}</Description>
        </InfoWrap>
        <InfoWrap>
          <Label>장소</Label>
          <Description>{form.place}</Description>
        </InfoWrap>
      </Column>
      <Column>
        <Label>대회 목적</Label>
        <Description>{form.purpose}</Description>
      </Column>
      <AwardSection>
        <AwardTitle>시상할 상 목록</AwardTitle>
        <TagWrap>
          {form.awardName}
          <Tag text="금상" />
          <Tag text="은상" />
        </TagWrap>
      </AwardSection>
    </Content>
  )
}

export default Inquiry

const Content = styled.div`
width: 700px;
display: flex;
flex-direction: column;
padding: 30px;
gap: 28px;
border-radius: 20px;
`

const TopWrap = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: flex-start;
gap: 12px;
padding: 12px 0;
border-bottom: 1px solid ${color.gray[200]};
`

const InfoWrap = styled.div`
display: flex;
align-items: center;
gap: 12px;
`

const Column = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
`

const AwardSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const TagWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const ProjectName = styled.p`
${font.semi24}
`

const Description = styled.p`
${font.regular14}
color: ${color.gray[500]};
line-height: 180%;
`

const DateText = styled.p`
${font.medium12}
color: ${color.gray[500]};
`

const Label = styled.p`
${font.medium16}
color: ${color.gray[700]};
`

const AwardTitle = styled.p`
${font.medium18}
`

const Status = styled.p`
  ${font.medium16}
`