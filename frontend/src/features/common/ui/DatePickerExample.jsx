import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';

const DatePickerExample = () => {
  const [date, setDate] = useState(null);

  return (
    <DatePicker
      label="날짜 선택"
      value={date}
      onChange={(newDate) => setDate(newDate)}
      renderInput={(params) => <TextField {...params} />}
      format="yyyy년 MM월 dd일"
    />
  );
};

export default DatePickerExample; 