import prisma from "@/config/db";
import getData from "./data";

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return getMovies(req, res);
        case "POST":
            return addMovie(req, res);
    }
}

const getMovies = async (req, res) => {
    try {
        const movies = await prisma.movie.findMany();
        res.status(200).json({success: true, data: movies});
    }
    catch (error) { 
        res.status(400).json({success: false, error: error}); 
    }
}

// const addMovie = async (req, res) => {
//     try {
//         const data =[]
//         const result = await prisma.movie.createMany({
//             data: data
//         });

//         return res.status(200).json({success: true, data: result});
//     } catch (error) {
//         return res.status(500).json({success: false, error: error});
//     }
// }
