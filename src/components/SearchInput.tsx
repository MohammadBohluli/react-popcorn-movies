import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setSearchInput } from '../feather/movies/movieSlice';
import { createSearchParams, useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '200px',

      '&:focus': {
        width: '900px',
      },
    },
  },
}));
////////////////////////////////////////////////////////////
const SearchInput = () => {
  const searchInput = useAppSelector((state) => state.movie.searchInput);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (searchInput === '') {
          navigate('/');
        } else {
          navigate({
            pathname: '/search',
            search: createSearchParams({ query: searchInput }).toString(),
          });
        }
      }}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>

        <StyledInputBase
          value={searchInput}
          onChange={(e) => dispatch(setSearchInput(e.target.value))}
          placeholder="Search Movies ..."
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </form>
  );
};

export default SearchInput;
