import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

import styled from "styled-components";

const Calendar = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  return (
    <CalendarContainer>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
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
