import { Box, Slider } from '@mui/material';
import AccordionMovie from './AccordionMovie';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addVoteValue } from '../feather/movies/movieSlice';

const VoteSelector = () => {
  const dispatch = useAppDispatch();
  const voteValue = useAppSelector((state) => state.movie.voteValue);
  return (
    <AccordionMovie title={'Vote'}>
      <Box>
        <Slider
          onChangeCommitted={(_e, value) => dispatch(addVoteValue(value))}
          defaultValue={voteValue}
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
