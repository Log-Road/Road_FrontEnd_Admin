import { Arrow1 } from "@/Assets"
import styled from "styled-components"
import { font, color } from "@/Styles"
import { useState } from "react"
import { convertKSTtoUTC } from "@/Utils/Date"

const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

const Calendar = ({ text, onDateSelect }: { text: string, onDateSelect: (data: string) => void }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [selectedDate, setSelectedDate] = useState<string>(text)
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const getStartAndEndDays = () => {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    return { firstDayOfMonth, lastDayOfMonth };
  };

  const groupDatesByWeek = (firstDayOfMonth: Date, lastDayOfMonth: Date) => {
    const weeks: (Date | null)[][] = [];
    let currentWeek: (Date | null)[] = [];

    for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
      currentWeek.push(null);
    }

    let currentDate = new Date(firstDayOfMonth);
    while (currentDate <= lastDayOfMonth) {
      currentWeek.push(new Date(currentDate));
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    while (currentWeek.length > 0 && currentWeek.length < 7) {
      currentWeek.push(null);
    }
    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }

    return weeks;
  };

  const handleMonthChange = (direction: 'prev' | 'next') => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + (direction === 'prev' ? -1 : 1), 1));
  };

  const handleDateClick = (date: Date) => {
    setOpen(false)

    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    setSelectedDate(`${year}-${month}-${day}`)

    const sendDate = convertKSTtoUTC(date)
    onDateSelect(sendDate)
  };

  const { firstDayOfMonth, lastDayOfMonth } = getStartAndEndDays();
  const weeks = groupDatesByWeek(firstDayOfMonth, lastDayOfMonth);

  return (
    <Container>
      <InputContainer onClick={() => setOpen(!open)}>
        <Text>{selectedDate}</Text>
        <Arrow1
          size={20}
          color={color.gray[500]}
          rotate="bottom"
        />
      </InputContainer>

      {
        open && (
          <CalendarContainer>
            <ShiftWrap>
              <Arrow1
                size={20}
                color={color.gray[500]}
                onClick={() => handleMonthChange('prev')}
              />
              <TopText>{`${year}년 ${month + 1}월`}</TopText>
              <Arrow1
                size={20}
                color={color.gray[500]}
                rotate="right"
                onClick={() => handleMonthChange('next')}
              />
            </ShiftWrap>

            <DayWrap>
              {daysOfWeek.map((day, index) => (
                <Day key={index}>
                  <DayText>{day}</DayText>
                </Day>
              ))}
            </DayWrap>

            <Month>
              {weeks.map((week, weekIndex) => (
                <Week key={weekIndex}>
                  {week.map((date, dateIndex) => (
                    <DateWrap
                      key={dateIndex}
                      isHover={!!date}
                      onClick={() => date && handleDateClick(date)}
                    >
                      <DateText>{date ? date.getDate().toString() : ''}</DateText>
                    </DateWrap>
                  ))}
                </Week>
              ))}
            </Month>
          </CalendarContainer>
        )
      }
    </Container>
  )
}

export default Calendar

const Container = styled.div`
position: relative;
flex: 1;
`

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  gap: 16px;
  border-radius: 8px;
  background-color: ${color.gray[100]};
`

const Text = styled.p`
  ${font.medium12}
  color: ${color.gray[600]};
`

const CalendarContainer = styled.div`
position: absolute;
top: 45px;
left: 0;
display: flex;
flex-direction: column;
gap: 4px;
min-width: 265px;
border-radius: 8px;
padding: 12px 12px 20px;
background-color: ${color.white};
box-shadow : 0 20px 50px 5px rgba(0, 0, 0, 0.2);
z-index: 100;
`

const ShiftWrap = styled.div`
display: flex;
justify-content: space-between;
`

const TopText = styled.p`
${font.medium14}
`

const DayWrap = styled.div`
  display: flex;
  justify-content: space-between;
`

const Day = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`

const DayText = styled.p`
${font.medium14}
`

const Month = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const Week = styled.div`
  display: flex;
  justify-content: space-between;
`

const DateWrap = styled.div<{ isHover: boolean }>`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: ${({ isHover }) => (isHover ? 'pointer' : 'default')};

  &:hover {
    background-color:  ${({ isHover }) => isHover ? color.gray[100] : 'transparent'}
  }
`

const DateText = styled.p`
${font.regular14}
`