import type { NextApiRequest, NextApiResponse } from "next";
import { getTeam } from "../../util/db-admin";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { teamid } = req.query;
    if (typeof teamid === "string") {
      const team = await getTeam(teamid);
      res.status(200).json(team);
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
