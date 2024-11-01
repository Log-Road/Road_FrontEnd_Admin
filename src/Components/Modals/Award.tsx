import { Checking } from "@/Assets"
import Button from "@/Components/Common/Button"
import { color, font } from "@/Styles"
import { useState } from "react"
import styled from "styled-components"

const AwardList = ["금상", "은상", "동상", "인기상"]

export default function Award() {

  const [select, setSelect] = useState<string>("")

  return (
    <Content>
      <TitleWrap>
        <Title>시상할 상을 선택해주세요</Title>
        <SubTitle>모든 상이 부여된 이후 시상할 수 있습니다</SubTitle>
      </TitleWrap>

      <AwardContent>
        {AwardList.map((value, index) => (
          <AwardWrap
            key={index}
            select={select === value}
            onClick={() => setSelect(value)}
          >
            <FlexWrap>
              <Checking size={20} color={color.gray[500]} />
              <AwardText>{value}</AwardText>
            </FlexWrap>
            <Count>1개 남음</Count>
          </AwardWrap>
        ))}
      </AwardContent>

      <Button text="선택하기" />
    </Content>
  )
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const AwardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const TitleWrap = styled.div`
display: flex;
flex-direction: column;
padding: 12px 0;
border-bottom: 1px solid ${color.gray[200]};
`

const Title = styled.p`
${font.medium20}
`

const SubTitle = styled.p`
${font.regular16}
color: ${color.gray[500]};
`

const AwardWrap = styled.div<{ select: boolean }>`
display: flex;
justify-content: space-between;
align-items: center;
padding: 8px 12px;
border-radius: 8px;
background-color: ${({ select }) => select ? color.gray[100] : color.white};

&:hover {
  background-color: ${color.gray[100]};
}
`

const FlexWrap = styled.div`
display: flex;
align-items: center;
gap: 12px;
`

const AwardText = styled.p`
${font.medium16}
`

const Count = styled.p`
${font.medium14}
color: ${color.gray[500]};
`