// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '../../../db'

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json("Invalid request");
    return;
  } else {
    try {
      const playerObj = JSON.parse(req.body);
      const newPlayer = await prisma.players.create({
        data: {
          name: playerObj.name,
          number: playerObj.number,
          teamId: playerObj.team,
        },
      });
      res.status(201).send("Player added!");
    } catch (e) {
      console.log(e);
      res.status(500).send("Could not add player");
    }
  }
}
