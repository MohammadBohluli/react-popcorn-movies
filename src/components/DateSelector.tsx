import AccordionMovie from './AccordionMovie';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useAppDispatch } from '../app/hooks';
import { addFromDate, addToDate } from '../feather/movies/movieSlice';
import { Typography } from '@mui/material';

const DateSelector = () => {
  const dispatch = useAppDispatch();
  const today = dayjs().format('YYYY/MM/DD');

  return (
    <AccordionMovie title={'Release Date'}>
      {/* from date */}
      <Typography>From</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker
            onChange={(value) =>
              dispatch(addFromDate(value?.format('YYYY/MM/DD') || ''))
            }
          />
        </DemoContainer>
      </LocalizationProvider>

      {/* to date */}
      <Typography>To</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker
            onChange={(value) =>
              dispatch(addToDate(value?.format('YYYY/MM/DD') || today))
            }
          />
        </DemoContainer>
      </LocalizationProvider>
    </AccordionMovie>
  );
};

export default DateSelector;
