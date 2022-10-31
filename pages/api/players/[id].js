// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '../../../db'

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json("Invalid request");
  } else {
    try {
      const players = await prisma.players.findMany({
        where: {
          teamId: parseInt(req.query.id),
        },
      });
  
      if (players.length !== 0) {
        res.status(200).json(
          players.sort((a, b) => {
            return a.id - b.id;
          })
        );
      } else {
        res.status(404).json("No players found");
      }
    } catch (e) {
      console.log('ERROR!!!');
      console.log(e);
      res.status(500).send("Could not fetch players");
    }
  }
}
