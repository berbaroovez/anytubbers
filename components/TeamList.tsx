import useSWR from "swr";
import fetcher from "../util/fetcher";
import styled from "styled-components";

const TeamList = () => {
  const { data } = useSWR("/api/teams", fetcher);
  console.log("Data", data);
  return (
    <div>
      {data
        ? data.map((team: any) => {
            return (
              <TeamContainer key={team.id}>
                <thead>
                  <tr>
                    <th colSpan={3}>{team.name}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Discord</td>
                    <td>Riot Id</td>
                    <td>Captain</td>
                  </tr>
                  {team.players.map((player: any) => {
                    return (
                      <tr key={player.discord}>
                        <td>{player.discord}</td>
                        <td>{player.riot}</td>
                        <td>{player.captain ? "C" : null}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </TeamContainer>
            );
          })
        : "loading"}
    </div>
  );
};

const TeamContainer = styled.table`
  min-width: 300px;
  max-width: 500px;
  border-collapse: collapse;
  thead tr {
    background: none;
  }
  th {
    padding: 8px;
    border-radius: 10px 10px 0 0;
    width: 100%;
    background: hsla(0, 0%, 77%, 1);
  }
  tr {
    background: hsla(0, 0%, 91%, 1);
    text-align: center;
    &:nth-of-type(1) {
      font-weight: bold;
    }
  }
  td {
    padding: 8px;
  }
`;
export default TeamList;
