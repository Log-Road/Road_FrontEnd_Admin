import { useEffect, useState } from "react"
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
import { useAddContest, useEditContest, useGetContestDetail } from "@/Utils/api/Contest"
import { ContestStatusType, FormState } from "@/Models/Manage"
import { useSearchParams } from 'react-router-dom';
import { format } from 'date-fns';

const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

const RenderInput = ({ property = '', label, placeholder }: InputType) => {
  const { form, setForm } = useContestStore();
  const value = (form as Record<string, any>)[property] || '';

  return (
    <Row>
      <FillText>{label}</FillText>
      <Input
        name={property}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setForm({ [property]: e.target.value })}
      />
    </Row>
  )
}

const Register = () => {
  const navigation = useNavigate()

  const [searchParams] = useSearchParams();
  const contestId = searchParams.get('contestId');

  const { data } = useGetContestDetail(contestId || '')
  const { form, handleChange, setForm, resetForm } = useContestStore();
  const { name, place, audience, awardName, purpose, awards } = form;

  const { mutate: AddMutate } = useAddContest()
  const { mutate: ModifyMutate } = useEditContest()

  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [awardCount, setAwardCount] = useState<number>(0);
  const [awardList, setAwardList] = useState<Array<{ name: string; count: number }>>([]);

  useEffect(() => {
    if (contestId && data) {
      setForm(data)
    } else {
      resetForm();
    }
  }, [contestId, data, setForm, resetForm]);

  const handleAddAward = () => {
    if (awardName && awards.length) {
      const newAward = {
        name: awardName,
        count: awardCount,
      };
      setAwardList((prevList) => [...prevList, newAward]);
      setAwardCount(0);
      setForm({ ...form, awardName: '' });
    }
  };

  const handleUpload = () => {
    const competitionData = {
      name,
      startDate,
      endDate,
      purpose,
      audience,
      place,
      awards: awardList,
    };
    console.log("보내는 데이터 확인", competitionData)
    AddMutate(competitionData);
    navigation('/contest');
  };

  const handleModify = () => {
    const competitionEditData = {
      ...form,
      status: "ONGOING" as ContestStatusType,
      startDate,
      endDate,
      awards: awardList,
    };
    ModifyMutate({ id: contestId || '', data: competitionEditData }, {
      onSuccess: () => {
        navigation('/contest');
      },
      onError: (error) => {
        console.error("Failed to modify contest:", error);
      }
    });
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>{contestId ? "대회 수정하기" : "대회 등록하기"}</S.Title>
        <S.InfoWrap>
          <S.Info>대회에 대한 설명과 필수 정보를 입력해주세요</S.Info>
          <S.Info>아래 버튼을 눌러 대회를 등록해주세요</S.Info>
        </S.InfoWrap>
      </S.Header>

      <S.Content>
        <RenderInput property="name" label="대회명" placeholder="대회명을 입력해주세요" />
        <RenderInput property="audience" label="대상" placeholder="대상을 입력해주세요" />
        <RenderInput property="place" label="장소" placeholder="장소를 입력해주세요" />

        <Row>
          <FillText>대회 일정</FillText>
          <Wrap>
            <Calendar
              text="시작 일을 입력해주세요"
              value={startDate}
              onDateSelect={(date) => {
                const formattedDate = format(date, 'yyyy-MM-dd');
                setForm({ startDate: formattedDate });
              }} />
            <Calendar
              text="종료 일을 입력해주세요"
              value={endDate}
              onDateSelect={(date) => {
                const formattedDate = format(date, 'yyyy-MM-dd');
                setForm({ endDate: formattedDate });
              }} />
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
                onChange={(selectedOption) => setAwardCount(Number(selectedOption))}
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
          text={contestId ? "수정" : "등록"}
          onClick={contestId ? handleModify : handleUpload}
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