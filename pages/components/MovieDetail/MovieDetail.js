import * as React from 'react';
import Image from 'next/image';
import { Button, Modal, Typography, Box } from '@mui/material';
import Link from 'next/link';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "63%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 0,
};

export default function MovieDetail({open, onClose, data}) {
  
  if(!data){
    data ={
      title: "Loading...",
      description: "Loading...",
      age_rating: "Loading...",
      poster_url: "http://www.pixelstalk.net/wp-content/uploads/2016/10/Blank-Wallpaper-HD.jpg",
      release_date: new Date(),
      movie_id: "0"
    }
  }

  let release_date = new Date(data.release_date)

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        id={data.movie_id}
      >
        <Box sx={style}>
            <Box sx={{display:"flex"}}>
                <Image
                    loader={() => data.poster_url}
                    src={data.poster_url}
                    width={360}
                    height={480}
                    alt={data.title}
                />
                <Box marginX={2} marginTop={2} display="flex" flexDirection="column">
                    <Box height={390} marginBottom={1} sx={{overflowY:"auto"}}>
                        <Typography variant="h5" fontWeight="bold">
                            Judul Film : {data.title}
                        </Typography>
                        <Typography sx={{mt:2}}>
                        <span style={{fontWeight:"bold"}}>Tanggal Rilis : </span> {release_date.getDate()}/{release_date.getMonth()}/{release_date.getFullYear()} 
                        </Typography>
                        <Typography sx={{mt:2}}>
                        <span style={{fontWeight:"bold"}}>Rating Usia : </span> {data.age_rating}+ 
                        </Typography>
                        <Typography sx={{mt:2}} fontWeight="bold">
                            Sinopsis : 
                        </Typography>
                        <Typography>
                            {data.description}
                        </Typography>
                    </Box>
                    <Box paddingTop={2}>
                      <Button 
                        variant="contained" 
                        fullWidth
                      >
                        <Link href={{pathname: '/movies/[movie_id]', query:{movie_id: data.movie_id}}}>
                            Pesan Tiket Sekarang
                        </Link>
                      </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
      </Modal>
    </>
  );
}