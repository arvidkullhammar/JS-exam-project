// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
/*   const newPlayer = await prisma.players.create({
    data: {
      name: req.body.name,
      number: req.body.number,
      teamId: req.body.team,
    },
  }) */

  res.status(200).json('hi');
}
