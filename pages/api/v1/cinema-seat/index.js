import prisma from "@/config/db";

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return getCinemaSeats(req, res);
        case "POST":
            return addCinemaSeats(req, res);
        case "PUT":
            return updateCinemaSeats(req, res);
    }
}

const getCinemaSeats = async (req, res) => {
    try {
        const Seats = await prisma.cinemaSeat.findMany();
        res.status(200).json(Seats);
    }
    catch (error) { 
        res.status(500).json(error); 
    }
}