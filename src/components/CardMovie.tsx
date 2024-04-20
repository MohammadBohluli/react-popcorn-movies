import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

interface Props {
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
}

const CradMovie = ({ title, release_date, poster_path }: Props) => {
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
          {title}
        </Typography>
        <Typography component={'p'} fontSize={'14px'}>
          {release_date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CradMovie;
