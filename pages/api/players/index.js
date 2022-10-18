// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  console.log(req.query.id);
  const players = await prisma.players.findMany();

  res.status(200).json(
    players.sort((a, b) => {
      return a.id - b.id;
    })
  );
}
