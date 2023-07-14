import prisma from "@/config/db";

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return getCinemaHall(req, res);
        case "POST":
            return addCinemaHall(req, res);
    }
}

const getCinemaHall = async (req, res) => {
    try {
        const Halls = await prisma.cinemaHall.findMany();
        res.status(200).json(Halls);
    }
    catch (error) { 
        res.status(500).json(error); 
    }
}
