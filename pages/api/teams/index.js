// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json("Invalid request");
  } else {
    try {

      const teams = await prisma.teams.findMany();
      res.status(200).json(
        teams.sort((a, b) => {
          return a.id - b.id;
        })
      );
    } catch (e) {
      console.log(e);
      res.status(500).send("Could not fetch teams");
    }
  } 
}
