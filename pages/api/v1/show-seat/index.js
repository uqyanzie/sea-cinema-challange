import prisma from "@/config/db";

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return getShowSeats(req, res);
        case "POST":
            return addShowSeats(req, res);
    }
}

const getShowSeats = async (req, res) => {
    try {
        const showSeats = await prisma.showSeat.findMany();
        res.status(200).json(showSeats);
    }
    catch (error) { 
        res.status(400).json(error); 
    }
}