import {
  List,
  ListItem,
  ListItemProps,
  Typography,
  styled,
} from '@mui/material';
import { useGetGenreListQuery } from '../feather/movies/movie-api-slice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  addSelectedGenre,
  removeSelectedGenre,
} from '../feather/movies/movieSlice';
import AccordionMovie from './AccordionMovie';

const CustomListItem = styled(ListItem)<ListItemProps>(({ theme }) => ({
  cursor: 'pointer',
  width: 'auto',
  padding: '5px 10px',
  border: `1px solid ${theme.palette.primary.light}`,
  margin: '2px',
  borderRadius: '30px',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));

const GenreSelector = () => {
  const { data } = useGetGenreListQuery();
  const selectedGenres = useAppSelector((state) => state.movie.selectedGenres);
  const dispatch = useAppDispatch();

  const handleClickGenre = (id: number) => {
    //checking selected genres in query params
    const isExistGenre = selectedGenres.includes(id);
    if (isExistGenre) {
      dispatch(removeSelectedGenre(id));
    } else {
      dispatch(addSelectedGenre(id));
    }
  };
  return (
    <AccordionMovie title={'Genres'}>
      <List sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {data?.genres.map(({ id, name }) => (
          <CustomListItem
            key={id}
            onClick={() => handleClickGenre(id)}
            sx={{
              backgroundColor: selectedGenres.includes(id) ? '#42a5f5' : '',
            }}
          >
            <Typography fontSize={13}>{name}</Typography>
          </CustomListItem>
        ))}
      </List>
    </AccordionMovie>
  );
};

export default GenreSelector;
