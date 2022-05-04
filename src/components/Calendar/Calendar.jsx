import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const CalendarPicker = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  return (
      <div className = "mt-10">
    <Calendar
      value={selectedDay}
      onChange={setSelectedDay}
      shouldHighlightWeekends
    />
    </div>
  );
};

export default CalendarPicker;