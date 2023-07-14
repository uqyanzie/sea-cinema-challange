import prisma from "@/config/db";

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getShowById(req, res);
    }
}

const getShowById = async (req, res) => {
    try {
        const { movie_id } = req.query

        const result = await prisma.show.findMany({
            where: {
                movie_id: {
                    equals: parseInt(movie_id)
                }
            }
        });

        return res.status(200).json(result);
    
    } catch (error) { 
        res.status(500).json({success: false, error:error}); 
    }
}
