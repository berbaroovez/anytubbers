import { GetServerSideProps } from "next";
import styled from "styled-components";
import { getTeam } from "../../util/db-admin";
import { Team } from "../../util/GlobalInterfaces";
import EditTeam from "./../../components/EditTeam";

export const getServerSideProps: GetServerSideProps = async (context) => {
  var teamInfo;
  if (context.params) {
    const teamId = context.params.teamid;

    if (typeof teamId === "string") {
      teamInfo = await getTeam(teamId);
      if (!teamInfo) {
        context.res.statusCode = 404;
        context.res.end();
        return {
          props: {
            error: "oops",
          },
        };
      }
    }
  }

  return { props: { teamInfo } };
};

export default function TeamPage({ teamInfo }: { teamInfo: Team }) {
  if (teamInfo) {
    return (
      <DashboardContainer>
        <EditTeam TeamInfo={teamInfo} />
      </DashboardContainer>
    );
  }
  return <h1>Loading</h1>;
}

const DashboardContainer = styled.div``;
