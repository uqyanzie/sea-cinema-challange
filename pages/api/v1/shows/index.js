import prisma from "@/config/db";

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return getShows(req, res);
        case "POST":
            return addShows(req, res);
    }
}

const getShows = async (req, res) => {
    try {

        const result = await prisma.show.findMany();

        return res.status(200).json({success: true, data: result});

    }catch (error) { 
        
        res.status(400).json(error); 
    }
}

const generateData = () => {
    let data = [];
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 6; j++) {
            data.push({
                date: new Date("2023-07-24"),
                start_time: new Date("2023-07-24 10:00:00"),
                end_time: new Date("2023-07-24 12:00:00"),
                ticket_price: 35000,
                movie_id: j,
                cinema_hall_id: i
            })
        }
    }

    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 6; j++) {
            data.push({
                date: new Date("2023-07-24"),
                start_time: new Date("2023-07-24 12:00:00"),
                end_time: new Date("2023-07-24 14:00:00"),
                ticket_price: 35000,
                movie_id: j,
                cinema_hall_id: i
            })
        }
    }

    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 6; j++) {
            data.push({
                date: new Date("2023-07-24"),
                start_time: new Date("2023-07-24 14:00:00"),
                end_time: new Date("2023-07-24 16:00:00"),
                ticket_price: 35000,
                movie_id: j,
                cinema_hall_id: i
            })
        }
    }

    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 6; j++) {
            data.push({
                date: new Date("2023-07-24"),
                start_time: new Date("2023-07-24 16:00:00"),
                end_time: new Date("2023-07-24 18:00:00"),
                ticket_price: 35000,
                movie_id: j,
                cinema_hall_id: i
            })
        }
    }

    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 6; j++) {
            data.push({
                date: new Date("2023-07-24"),
                start_time: new Date("2023-07-24 18:00:00"),
                end_time: new Date("2023-07-24 20:00:00"),
                ticket_price: 35000,
                movie_id: j,
                cinema_hall_id: i
            })
        }
    }

    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 6; j++) {
            data.push({
                date: new Date("2023-07-24"),
                start_time: new Date("2023-07-24 20:00:00"),
                end_time: new Date("2023-07-24 22:00:00"),
                ticket_price: 35000,
                movie_id: j,
                cinema_hall_id: i
            })
        }
    }
    
    return data;
}

 const addShows = async (req, res) => {
    try {
         const data = generateData();
                
         const result = await prisma.show.createMany({
             data: data
         });
         return res.status(200).json({success: true, data: result});
    } catch (error) {
         return res.status(500).json({success: false, error: error});     
    }
}
