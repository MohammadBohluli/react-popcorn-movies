import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

interface Props {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
}

const CradMovie = ({ id, title, release_date, poster_path }: Props) => {
  return (
    <Card sx={{ width: '280px', height: '450px' }}>
      <CardActionArea>
        <CardMedia
          component={'img'}
          height="350"
          image={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
      </CardActionArea>
      <CardContent>
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
    </Card>
  );
};

export default CradMovie;
