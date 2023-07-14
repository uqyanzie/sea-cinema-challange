import React from "react"; 
import { 
    Container, Grid, 
    Typography, Box, 
    Divider, Button,
    Radio, RadioGroup,
    FormControlLabel, 
    FormControl, FormLabel 
} from "@mui/material"
import  Image from "next/image"
import MovieShowSchedule from "../components/ShowBooking/MovieShowsSchedule";

export const getServerSideProps = async ({
    query
}) => {

    const movie = await fetch(`http://localhost:3000/api/v1/movies/${query.movie_id}`);
    const movieResponse = await movie.json();

    const shows = await fetch(`http://localhost:3000/api/v1/shows/${query.movie_id}`);
    const showsResponse = await shows.json();

    return {
        props: {
            movie: movieResponse || null,
            shows: showsResponse || null
        }
    }
}

const Movie = ({ movie, shows }) => {
    const [showTime, setShowTime] = React.useState(null);

    const handleShowTime = (event) => {
        setShowTime(event.target.value);
    }

    if (!movie) {
        return <h1>Invalid Movie Id</h1>
    }


    const filterShows = (shows) => {
        const uniqueDate = [...new Set(shows.map(item => item.date.toLocaleDateString()))]
    
        return uniqueDate.map(date => {
            return shows.filter(item => item.date.toLocaleDateString() === date)
        })
    }

    const release_date = new Date(movie.release_date);

    return (
        <main>
            <Container>
                <Grid container maxWidth="lg" rowSpacing={2} marginBottom={3}>
                    <Grid item xs={12} sm={12} lg={4} display="flex" justifyContent="center">
                        <Image
                            loader={() => movie.poster_url}
                            src={movie.poster_url}
                            alt={movie.title}
                            width={300}
                            height={450}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                        <Typography variant="h3" textAlign={{xs:"center", lg:"start"}}>
                            {movie.title}
                        </Typography>
                        <Divider sx={{marginY:2}}/>
                        <Typography variant="h5">
                            {release_date.getDate()}/{release_date.getMonth()}/{release_date.getFullYear()}
                        </Typography>
                        <Typography variant="h6">
                            {movie.age_rating}
                        </Typography>
                        <Typography variant="body2">
                            {movie.description}
                        </Typography>
                    </Grid>
                </Grid>
                <Divider variant="middle" sx={{marginY:2}}/>
                <Box>
                    <MovieShowSchedule movie={movie}/>
                </Box>
                <Divider variant="middle" sx={{marginY:2}}/>
            </Container>
        </main>
    )
}

export default Movie;