import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from '@mui/material';
import { Link } from 'react-router-dom';

interface Props {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
}

const Vote = styled('span')(({ color }) => ({
  borderRadius: '50%',
  padding: '7px',
  display: 'inline-block',
  margin: '10px',
  backgroundColor: color,
  textAlign: 'center',
  minWidth: '20px',
  minHeight: '20px',
}));

const CradMovie = ({
  id,
  title,
  release_date,
  poster_path,
  vote_average,
}: Props) => {
  const vote_average_fix = Number(vote_average.toFixed(1));
  let classVote = 'black';

  if (vote_average_fix >= 7) {
    classVote = '#16A34A';
  } else if (vote_average_fix <= 4) {
    classVote = '#EF4444';
  } else {
    classVote = '#FACC15';
  }

  return (
    <Card sx={{ width: '280px' }}>
      <CardActionArea>
        <CardMedia
          component={'img'}
          height="350"
          image={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
      </CardActionArea>

      <CardContent sx={{ height: '40px' }}>
        <Typography component={'h3'} fontWeight={'bold'} fontSize={'18px'}>
          <Link
            to={`movies/${id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            {title}
          </Link>
        </Typography>
        <Typography component={'p'} fontSize={'14px'}>
          {release_date}
        </Typography>
      </CardContent>
      <Typography textAlign={'right'}>
        <Vote color={classVote}>{vote_average_fix}</Vote>
      </Typography>
    </Card>
  );
};

export default CradMovie;
