import { useState } from "react"
import * as S from "./style"
import styled from "styled-components"
import Input from "@/Components/Common/Input"
import Calendar from "@/Pages/Register/Calendar"
import DropBox from "@/Components/Common/DropBox"
import { Plus } from "@/Assets"
import { color, font } from "@/Styles"
import RemovableTag from "@/Components/Management/RemovableTag"
import Button from "@/Components/Common/Button"
import { InputType } from "@/Models/Manage"
import useContestStore from "@/Store/useContestStore"
import { useNavigate } from "react-router-dom"
import { useAddContest } from "@/Utils/api/Contest"
import { ContestCreate } from "@/Models/Manage"

const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

const RenderInput = ({ property = '', label, placeholder }: InputType) => {
  const { form, handleChange } = useContestStore();
  const value = (form as Record<string, any>)[property] || '';

  return (
    <Row>
      <FillText>{label}</FillText>
      <Input
        name={property}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </Row>
  )
}

const Register = () => {
  const navigation = useNavigate()

  const { mutate } = useAddContest()
  const { form, handleChange, setForm } = useContestStore();
  const { name, place, audience, awardName, purpose } = form;

  const [selectOption, setSelectOption] = useState<string>("")
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [awardList, setAwardList] = useState<Array<{ name: string; count: number }>>([]);

  const handleOptionChange = (value: string) => {
    setSelectOption(value)
  }

  const handleAddAward = () => {
    if (awardName && selectOption) {
      const newAward = {
        name: awardName,
        count: parseInt(selectOption),
      };
      setAwardList((prevList) => [...prevList, newAward]);
      setForm({ awardName: '' });
      setSelectOption("");
    }
  };

  const handleStartDate = (date: string) => {
    setStartDate(date)
  }

  const handleSelectEndDate = (date: string) => {
    setEndDate(date)
  }

  const handleUpload = () => {
    navigation('/contest')
    mutate(competitionData);
  }

  const competitionData: ContestCreate = {
    name,
    startDate,
    endDate,
    purpose,
    audience,
    place,
    awards: awardList,
  };

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
        <RenderInput property="contestName" label="대회명" placeholder="대회명을 입력해주세요" />
        <RenderInput property="target" label="대상" placeholder="대상을 입력해주세요" />
        <RenderInput property="locate" label="장소" placeholder="장소를 입력해주세요" />

        <Row>
          <FillText>대회 일정</FillText>
          <Wrap>
            <Calendar text="시작 일을 입력해주세요" onDateSelect={handleStartDate} />
            <Calendar text="종료 일을 입력해주세요" onDateSelect={handleSelectEndDate} />
          </Wrap>
        </Row>
        <Row>
          <FillText>대회 목적</FillText>
          <TextArea
            value={purpose}
            placeholder="대회 목적을 간단하게 작성해주세요"
            onChange={(e) => setForm({ purpose: e.target.value })}
          />
        </Row>
        <Row>
          <FillText>상 등록</FillText>
          <AwardWrap>
            <Wrap>
              <Input
                name="awardName"
                value={awardName}
                placeholder="상 이름을 입력해주세요"
                onChange={handleChange}
              />
              <DropBox
                width='180px'
                text="개수를 선택해주세요"
                options={options}
                onChange={handleOptionChange}
              />
              <PlusButton>
                <Plus
                  size={18}
                  color={color.gray[600]}
                  onClick={handleAddAward}
                />
              </PlusButton>
            </Wrap>
            <S.TagWrap>
              {awardList.map(({ name, count }, index) => (
                <RemovableTag key={index} text={name} count={count} />
              ))}
            </S.TagWrap>
          </AwardWrap>
        </Row>
      </S.Content>

      <S.ButtonWrap>
        <Button
          width="200px"
          text="뒤로가기"
          type="PREV"
          onClick={() => navigation('/contest')}
        />
        <Button
          width="200px"
          text="등록"
          onClick={handleUpload}
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