import useSWR from "swr";
import fetcher from "../../util/fetcher";
import NextLink from "next/link";
import { Team } from "../../util/GlobalInterfaces";

export default function Dashboard() {
  const { data } = useSWR("/api/teams", fetcher);

  return (
    <div>
      {data
        ? data.map((team: Team) => {
            return (
              <div>
                <NextLink href="/p/[teamid]" as={`/p/${team.id}`} passHref>
                  {team.name}
                </NextLink>
              </div>
            );
          })
        : "Loading"}
    </div>
  );
}
