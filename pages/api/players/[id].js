// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


export default async function handler(req, res) {

/*   const newPlayer = await prisma.players.create({
    data: {
      Name: req.body.name,
      number: req.body.number,
      TeamId: req.body.team,
    },
  }) */


  const players = await prisma.players.findMany({
    where: {
      TeamId: parseInt(req.query.id)
    }
  })
 
  if (players.length !== 0 ) {
    res.status(200).json(players);
  } else {
    res.status(404).json("No players found");
  }
}