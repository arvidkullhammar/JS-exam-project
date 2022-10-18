// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  console.log(req.query.id);
  const team = await prisma.teams.findUnique({
    where: {
      id: parseInt(req.query.id),
    },
  });
  console.log("rooster", team);

  if (team !== null) {
    res.status(200).json(team);
  } else {
    res.status(404).json("No team found");
  }
}
