import { Client } from "@notionhq/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const response = await notion.databases.query({
    database_id: "3fa8baed0a7c4f5899b067c7a79e6f5d",
    sorts: [{ property: "date", direction: "descending" }],
  });

  res.status(200).json(response.results);
};
