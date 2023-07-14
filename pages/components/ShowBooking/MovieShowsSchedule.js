import * as React from "react"
import axios from "axios"

import { Container, Box, Grid, Button, Typography, Divider } from "@mui/material"
import ShowSeatPicker from "../ShowSeatPicker.js/ShowSeatPicker"

const MovieShowSchedule = ({ movie }) => {
    const [movieShows, setMovieShows] = React.useState([]);
    const [openSeatPicker, setOpenSeatPicker] = React.useState(false);
    const [selectedShowTime, setSelectedShowTime] = React.useState(null);

    const handleOpenSeatPicker = (showData) => {
        setSelectedShowTime(showData);
        setOpenSeatPicker(true);
    }

    const handleCloseSeatPicker = () => {
        setOpenSeatPicker(false);
    }

    const baseURL = "http://localhost:3000/api/v1";

    const parseShowsDate = (movieShows) => {
        const parsedShowsDate = movieShows.map(item => {
            return {
                ...item,
                date: new Date(item.date),
                start_time: new Date(item.start_time),
                end_time: new Date(item.end_time)
            } 
        })
        return parsedShowsDate;
    }

    const filterShowsByDate = (movieShows) => {
        //console.log(typeof movieShows[0].date)
        const uniqueDate = [...new Set(movieShows.map(item => item.date.toLocaleDateString()))]
    
        return uniqueDate.map(date => {
            return movieShows.filter(item => item.date.toLocaleDateString() === date)
        })
    }

    const filterMovieShowsByDate = (movieShows) => {
        let filteredMovieShows = parseShowsDate(movieShows)
        filteredMovieShows = filterShowsByDate(filteredMovieShows);

        return filteredMovieShows;
    }

    const getMovieShows = async () => {
        await axios.get(`${baseURL}/shows/${movie.movie_id}`)
        .then(res => {
            console.log(res.data)
            const movieShowsData = filterMovieShowsByDate(res.data);
            setMovieShows(movieShowsData)
        })
        .catch(error => {
            console.error(error)
        })
    }

    const MovieShowTimeList = ({ showTimes }) => {
        return showTimes.map((show, index) => (
            <Button 
                key={index} 
                variant="contained"
                // onClick={() => handleOpenSeatPicker(show)}
            >
                <time datetime={show.start_time.toTimeString()} suppressHydrationWarning>
                    {show.start_time.toLocaleTimeString("in", {hour: '2-digit', minute:'2-digit', hour12: false})}
                </time>
            </Button>
        ))
    }

    const MovieShowsContainer = ({ shows, index }) => {
        return(
            <Container maxWidth="md" sx={{marginY:3}}>
                <Typography variant="h5" key={index}>
                    {shows[0].date.toLocaleDateString("in")}
                </Typography>
                <Container maxWidth="md" sx={{border:"solid 1px #000", padding:3, marginY:1}}>
                    <MovieShowTimeList showTimes={shows}/>
                </Container>
                <Divider variant="middle" sx={{marginY:2}}/>   
             </Container>  
        )           
    }

    React.useEffect(() => {
        getMovieShows()
    })

    return (
        <>
            {movieShows.map((shows, index) => (
                <>
                    <MovieShowsContainer shows={shows} index={index}/>
                </>
            ))}
            {/* <ShowSeatPicker open={openSeatPicker} onClose={handleCloseSeatPicker} showData={selectedShowTime}/> */}
        </>
    )
}

export default MovieShowSchedule;