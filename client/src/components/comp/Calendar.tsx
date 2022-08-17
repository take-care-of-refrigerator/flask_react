import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      inline
    />
  );
};

export default Calendar;
