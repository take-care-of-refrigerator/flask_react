import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const Calendar = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const navigate = useNavigate();
  const dateChange = (date: Date | null) => {
    navigate(`/diary/:${date?.toLocaleDateString()}`);
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
  padding: 10px;
  width: 1200px;
`;
