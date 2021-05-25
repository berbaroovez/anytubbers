import type { NextApiRequest, NextApiResponse } from "next";
import { getTeams, addTeam } from "../../util/db-admin";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let response = await addTeam();
  //   console.log(response.results);
  //   res.status(200).json(response.results);
};
