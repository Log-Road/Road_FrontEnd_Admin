import * as S from "./style"
import styled from "styled-components"
import Input from "@/Components/Common/Input"
import Calendar from "@/Pages/Register/Calendar"
import DropBox from "@/Components/Common/DropBox"
import { Plus } from "@/Assets"
import { color, font } from "@/Styles"
import RemovableTag from "@/Components/Management/RemovableTag"
import Button from "@/Components/Common/Button"
import { useForm } from "@/Hooks/useForm"
import { InputType } from "@/Models/Register"
import { useState } from "react"

const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

const RenderInput = ({ property = '', label, placeholder }: InputType) => {

  const { form: registerForm, handleChange: registerFormChange } = useForm({
    name: "",
    target: "",
    locate: ""
  })

  const value = registerForm[property as keyof typeof registerForm] || "";

  return (
    <Row>
      <FillText>{label}</FillText>
      <Input
        name={property}
        value={value}
        placeholder={placeholder}
        onChange={registerFormChange}
      />
    </Row>
  )
}

const Register = () => {

  const { form: awardForm, handleChange: awardFormChange } = useForm({ awardName: ""})
  const { awardName } = awardForm

  return (
    <S.Container>
      <S.Header>
        <S.Title>대회 등록하기</S.Title>
        <S.InfoWrap>
          <S.Info>대회에 대한 설명과 필수 정보를 입력해주세요</S.Info>
          <S.Info>등록 버튼을 누른 직후 대회가 진행됩니다</S.Info>
        </S.InfoWrap>
      </S.Header>

      <S.Content>
        <RenderInput property="name" label="대회명" placeholder="대회명을 입력해주세요" />
        <RenderInput property="target" label="대상" placeholder="대상을 입력해주세요" />
        <RenderInput property="locate" label="장소" placeholder="장소를 입력해주세요" />

        <Row>
          <FillText>대회 일정</FillText>
          <Wrap>
            <Calendar text="시작 일을 입력해주세요" />
            <Calendar text="종료 일을 입력해주세요" />
          </Wrap>
        </Row>
        <Row>
          <FillText>대회 목적</FillText>
          <TextArea placeholder="대회 목적을 간단하게 작성해주세요" />
        </Row>
        <Row>
          <FillText>상 등록</FillText>
          <AwardWrap>
            <Wrap>
              <Input
                name="awardName"
                value={awardName}
                placeholder="상 이름을 입력해주세요"
                onChange={awardFormChange}
              />
              <DropBox
                width='180px'
                text="개수를 선택해주세요"
                options={options}
              />
              <PlusButton>
                <Plus
                  size={18}
                  color={color.gray[600]}
                  onClick={() => { }}
                />
              </PlusButton>
            </Wrap>
            <S.TagWrap>
              <RemovableTag text="금상" count="3" />
            </S.TagWrap>
          </AwardWrap>
        </Row>
      </S.Content>

      <S.ButtonWrap>
        <Button
          width="200px"
          text="뒤로가기"
          type="PREV"
          onClick={() => { }}
        />
        <Button
          width="200px"
          text="다음"
          onClick={() => { }}
        />
      </S.ButtonWrap>
    </S.Container>
  )
}

export default Register

const Row = styled.div`
display: flex;
`

const Wrap = styled.div`
width: 100%;
gap: 8px;
display: flex;
justify-content: space-between;
align-items: center;
`

const TextArea = styled.textarea`
width: 100%;
height: 120px;
border: none;
padding: 8px 16px;
border-radius: 4px;
resize: none;
background-color: ${color.gray[100]};
`

const AwardWrap = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 8px;
`

const PlusButton = styled.button`
border: none;
border-radius: 8px;
padding: 4px 8px;
`

const FillText = styled.p`
width: 240px;
${font.medium14}
`