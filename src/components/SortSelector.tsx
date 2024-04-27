import { FormControl, NativeSelect } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setSortBy } from '../feather/movies/movieSlice';
import AccordionMovie from './AccordionMovie';

const SortSelector = () => {
  const sortBy = useAppSelector((state) => state.movie.sortBy);
  const dispatch = useAppDispatch();

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
    <AccordionMovie title={'Sort By'}>
      <FormControl fullWidth>
        <NativeSelect
          value={sortBy}
          onChange={(e) => dispatch(setSortBy(e.target.value))}
          inputProps={{
            name: 'Sort',
            id: 'uncontrolled-native',
          }}
        >
          {sortOrder.map((order) => (
            <option key={order.value} value={order.value}>
              {order.label}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </AccordionMovie>
  );
};

export default SortSelector;
