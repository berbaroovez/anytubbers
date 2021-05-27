import type { NextApiRequest, NextApiResponse } from "next";
import { getTeams } from "../../util/db-admin";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const teams = await getTeams();
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ error });
  }
};
