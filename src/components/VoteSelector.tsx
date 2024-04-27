import { Box, Slider } from '@mui/material';
import AccordionMovie from './AccordionMovie';

const VoteSelector = () => {
  return (
    <AccordionMovie title={'Vote'}>
      <Box>
        <Slider
          defaultValue={5}
          valueLabelDisplay="auto"
          shiftStep={30}
          step={1}
          marks
          min={1}
          max={10}
        />
      </Box>
    </AccordionMovie>
  );
};

export default VoteSelector;
