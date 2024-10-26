import * as S from "./style";
import styled from "styled-components";
import { EditNote } from "@/Assets";
import Button from "@/Components/Common/Button";
import { color, font } from "@/Styles";
import DropBox from "@/Components/Common/DropBox";

export default function EditStudent() {
  const statusOption = ["재학중", "졸업", "전학?자퇴", "휴학"]
  return (
    <>
      <HeaderSection>
        <WriteIconWrap>
          <EditNote size={20} color={color.blue[500]} />
        </WriteIconWrap>
        <div>
          <Title>학생 정보를 수정해주세요</Title>
          <SubTitle>
            <HighlightedText>홍길동</HighlightedText> 정보 수정중...
          </SubTitle>
        </div>
      </HeaderSection>

      <FormContent>
        <InputWrap>
          {["학년", "반", "번호"].map((value) => (
            <FieldGroup key={value}>
              <FieldLabel>{value}</FieldLabel>
              <NumberInput type="number" />
            </FieldGroup>
          ))}
        </InputWrap>
        <DropBox text="학생 상태를 선택해주세요" options={statusOption} />
      </FormContent>
      <Button text="수정하기" onClick={() => { }} />
    </>
  );
}

const HeaderSection = styled.div`
display: flex;
align-items: center;
gap: 8px;
`;

const WriteIconWrap = styled.div`
width: 50px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
background-color: ${color.blue[100]};
`

const FormContent = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`;

const InputWrap = styled.div`
display: flex;
justify-content: space-between;
`

const FieldGroup = styled.div`
position: relative;
width: 97px;
`;

const NumberInput = styled.input`
width: 100%;
padding: 8px 20px;
border-radius: 8px;
border: 1px solid ${color.gray[200]};
text-align: right;
`;

const FieldLabel = styled.p`
position: absolute;
${font.regular12}
top: 50%;
left: 8px;
transform: translateY(-50%);
`;

const Title = styled.p`
${font.medium18}
`

const SubTitle = styled.p`
${font.regular14}
color: ${color.gray[500]};
`

const HighlightedText = styled.span`
${font.medium14}
`;