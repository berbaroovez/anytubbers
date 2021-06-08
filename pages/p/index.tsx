import useSWR from "swr";
import fetcher from "../../util/fetcher";
import NextLink from "next/link";
import { Team } from "../../util/GlobalInterfaces";
import { DashboardSkeleton } from "../../components/DashboardSkeleton";
import styled from "styled-components";
export default function Dashboard() {
  const { data } = useSWR("/api/teams", fetcher);

  return (
    <DashboardSkeleton>
      {data
        ? data.map((team: Team) => {
            return (
              <TeamsContainer>
                <NextLink href="/p/[teamid]" as={`/p/${team.id}`} passHref>
                  {team.name}
                </NextLink>
              </TeamsContainer>
            );
          })
        : "Loading"}
    </DashboardSkeleton>
  );
}

const TeamsContainer = styled.div`
  a {
    color: hsl(220, 48%, 16%);
    font-weight: 600;
    &:hover {
      color: #0b1af1;
    }
  }
`;
