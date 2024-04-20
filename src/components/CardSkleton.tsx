import { Card, CardContent, Skeleton } from '@mui/material';

const CardSkleton = () => {
  return (
    <Card sx={{ width: '280px', height: '450px' }}>
      <Skeleton variant="rectangular" height={'350px'} />
      <CardContent>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </CardContent>
    </Card>
  );
};

export default CardSkleton;
