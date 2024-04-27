import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  ListItemProps,
  Typography,
  styled,
} from '@mui/material';
import { useGetGenreListQuery } from '../feather/movies/movie-api-slice';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  addSelectedGenre,
  removeSelectedGenre,
} from '../feather/movies/movieSlice';

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
    const isExistGenre = selectedGenres.includes(id);
    if (isExistGenre) {
      dispatch(removeSelectedGenre(id));
    } else {
      dispatch(addSelectedGenre(id));
    }
  };
  return (
    <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            height: '50px',
            '&.Mui-expanded': {
              minHeight: '0',
              borderBottom: '1px solid grey',
            },
          }}
        >
          <Typography>Filters</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: '30px 16px' }}>
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
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default GenreSelector;
