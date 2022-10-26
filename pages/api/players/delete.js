// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '../../../db'

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    res.status(405).json("Invalid request");
    return;
  } else {
    try {
      const deleteId = req.body;
      console.log('delete ID',deleteId)
      const deleteUser = await prisma.players.delete({
          where: {
            id: Number(deleteId),
          },
      })
      res.status(201).send("Player deleted!");
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  }
}
