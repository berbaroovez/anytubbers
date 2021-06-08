import styled from "styled-components";
import useSWR from "swr";
import fetcher from "../util/fetcher";

export default function Dashboard() {
  const { data } = useSWR("/api/teams", fetcher);

  return (
    <DashboardContainer>
      {data
        ? data.map((team: any) => <div key={team.id}>{team.name}</div>)
        : "Loading"}
    </DashboardContainer>
  );
}

const DashboardContainer = styled.div``;
