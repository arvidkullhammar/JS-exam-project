// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json("Invalid request");
    return;
  } else {
    try {
      const body = JSON.parse(req.body);
      const newPlayer = await prisma.players.create({
        data: {
          name: body.name,
          number: body.number,
          teamId: body.team,
        },
      });
      res.status(201).send("Player added!");
    } catch (e) {
      console.log(e);
      res.status(500).send("Could not add player");
    }
  }
}
