import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { diaryState } from "../../states/frigeState";
import { useRecoilState } from "recoil";

const Calendar = () => {
  const [startDate] = useState<Date | null>(new Date());
  const [, setDiaryDate] = useRecoilState(diaryState);
  const navigate = useNavigate();
  const dateChange = (date: Date | null) => {
    if (!date) return;
    const changeDate = date.toLocaleDateString();
    navigate(`/diary/:${changeDate}`);
    setDiaryDate(changeDate);
  };
  return (
    <CalendarContainer>
      <DatePicker
        selected={startDate}
        onChange={(date) => dateChange(date)}
        inline
      />
    </CalendarContainer>
  );
};

export default Calendar;

const CalendarContainer = styled.div`
  padding: 40px;
  width: 1200px;
`;
