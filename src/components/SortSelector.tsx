import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setSortBy } from '../feather/movies/movieSlice';

const SortSelector = () => {
  const sortBy = useAppSelector((state) => state.movie.sortBy);
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setSortBy(event.target.value));
  };

  const sortOrder = [
    { value: 'popularity.desc', label: 'Popularity Descending' },
    { value: 'popularity.asc', label: 'Popularity Ascending' },
    { value: 'vote_average.desc', label: 'Rating Descending' },
    { value: 'vote_average.asc', label: 'Rating Ascending' },
    { value: 'primary_release_date.desc', label: 'Release Date Descending' },
    { value: 'primary_release_date.asc', label: 'Release Date Ascending' },
    { value: 'title.asc', label: 'Title (A-Z)' },
    { value: 'title.desc', label: 'Title (Z-A)' },
  ];
  return (
    <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Sort
        </AccordionSummary>
        <AccordionDetails>
          <Select value={sortBy} label="Age" onChange={handleChange}>
            {sortOrder.map((order) => (
              <MenuItem key={order.value} value={order.value}>
                {order.label}
              </MenuItem>
            ))}
          </Select>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default SortSelector;
