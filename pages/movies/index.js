import Head from 'next/head'
import * as React from 'react'
import { Grid } from "@mui/material"
import axios from 'axios';

import Layout from '@/pages/components/Layout/Layout'
import ImgMediaCard from '@/pages/components/ImgMediaCard/ImgMediaCard'
import MovieDetail from '@/pages/components/MovieDetail/MovieDetail'

export default function Home() {
  const [movies, setMovies] = React.useState([])
  const [movieDetail, setMovieDetail] = React.useState({})
  const [showMovieDetail, setShowMovieDetail] = React.useState(false)

  const baseURL = "http://localhost:3000/api/v1"

  const getMovies = async () => {
    axios.get(`${baseURL}/movies`)
    .then(function (response) {
      setMovies(response.data.data)
    })
    .catch(function (error) {
      console.log(error);
      console.log(`this is ${baseURL}`)
    })
    .finally(function () {
      // always executed
    });
  }

  const handleOpenMovieDetail = (data) => {
    setMovieDetail(data)
    setShowMovieDetail(true)
  }

  const handleCloseMovieDetail = () => {
    setShowMovieDetail(false)
    setMovieDetail({})
  }

  React.useEffect(() => {
    getMovies()
  }, [])
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Grid container spacing={2} direction={{xs:"column", sm:"row"}} alignItems="center" justifyContent="center">
        {movies.map((key, value) => (
          <Grid key={key.movie_id} item xs={12} sm={6} md={4} lg={3} xl={3} justifyContent="center" alignItems="center" alignContent="center" display="flex">
            <ImgMediaCard 
              data={key}
              onShowDetail={()=>handleOpenMovieDetail(key)}
            />
          </Grid>
        ))}
        </Grid>
        <MovieDetail
          open={showMovieDetail}
          onClose={handleCloseMovieDetail}
          data={movieDetail}
        />
    </main>
    </>
  )
}
