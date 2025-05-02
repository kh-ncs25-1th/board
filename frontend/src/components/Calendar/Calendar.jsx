import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { ko } from 'date-fns/locale';
import { useState } from 'react';
import { format } from 'date-fns';
import './Calendar.css';

const Calendar = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
    if (onDateSelect) {
      onDateSelect(newValue);
    }
  };

  const formatDate = (date) => {
    return format(date, 'yyyy년 MM월 dd일', { locale: ko });
  };

  return (
    <div className="calendar-container">
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ko}>
        <StaticDatePicker
          value={selectedDate}
          onChange={handleDateChange}
          displayStaticWrapperAs="desktop"
          showToolbar={false}
          views={['year', 'month', 'day']}
          openTo="day"
          sx={{
            width: '400px',
            backgroundColor: 'white',
            '& .MuiPickersCalendarHeader-root': {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 16px',
              backgroundColor: '#f5f5f5',
              borderRadius: '4px',
              marginBottom: '8px'
            },
            '& .MuiPickersCalendarHeader-label': {
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: '#1976d2',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#e3f2fd',
                borderRadius: '4px',
                padding: '4px 8px'
              }
            },
            '& .MuiPickersArrowSwitcher-root': {
              color: '#1976d2'
            },
            '& .MuiPickersDay-root': {
              margin: '2px',
              '&.Mui-selected': {
                backgroundColor: '#1976d2',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#1565c0'
                }
              }
            },
            '& .MuiPickersYear-root': {
              fontSize: '1.1rem',
              '&.Mui-selected': {
                backgroundColor: '#1976d2',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#1565c0'
                }
              }
            },
            '& .MuiPickersMonth-root': {
              fontSize: '1.1rem',
              '&.Mui-selected': {
                backgroundColor: '#1976d2',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#1565c0'
                }
              }
            }
          }}
        />
        <div style={{ marginTop: 12, textAlign: 'center', fontWeight: 'bold', color: '#1976d2', fontSize: '1.1rem' }}>
          {format(selectedDate, 'yyyy년 MM월 dd일', { locale: ko })}
        </div>
      </LocalizationProvider>
    </div>
  );
};

export default Calendar; 