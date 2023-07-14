import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link'

export default function ImgMediaCard({ data, onShowDetail}) {
  return (
    <Card sx={{ maxWidth: 250, maxHeight: 570, margin:"10px 0", paddingBottom:1}}>
      <CardMedia
        component="img"
        alt="green iguana"
        image={data.poster_url || "./avatar.jpg"}
      />
      <CardContent sx={{textOverflow:"ellipsis", overflow:"hidden", padding:1.5}}>
        <Typography gutterBottom variant="h5" component="div" textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" textOverflow="ellipsis" overflow="hidden" className='hideOverflow'>
          {data.description}
        </Typography>
        <Typography variant="body2">Age Rating : {data.age_rating}</Typography>
      </CardContent>
      <CardActions sx={{justifyContent:"space-around", padding:1.5}}>
        <Button size="small" variant="contained">
          <Link href={{pathname: '/movies/[movie_id]', query:{movie_id: data.movie_id}}}>
              Pesan Tiket
          </Link>
        </Button>
        <Button size="small" variant="text" onClick={onShowDetail}>Show Detail</Button>
      </CardActions>
    </Card>
  );
}