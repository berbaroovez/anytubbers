import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { deleteTeam } from "../util/db";
import { Team, Player } from "../util/GlobalInterfaces";
import { updateTeam } from "./../util/db";
interface EditTeamProps {
  TeamInfo: Team;
}

const EditTeam: React.FC<EditTeamProps> = ({ TeamInfo }) => {
  const blankPlayer: Player = { captain: false, riot: "", discord: "" };

  const [teamName, setTeamName] = useState(TeamInfo.name || "");
  const [playerList, setPlayerList] = useState<Player[]>(
    TeamInfo.players || undefined
  );

  const submitTeam = () => {
    updateTeam({
      id: TeamInfo.id || "",
      players: playerList,
      name: teamName,
    });
  };

  const deleteCurrentTeam = () => {
    deleteTeam(TeamInfo.id || "");
  };
  const addPlayer = () => {
    setPlayerList([...playerList, { ...blankPlayer }]);
  };

  const handleTeamNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(e.target.value);
  };

  const handlePlayerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedPlayers = [...playerList];

    //! means that we know it will not be null
    const index = parseInt(e.target.dataset.idx!);

    // updatedPlayers
    if (e.target.className === "discord") {
      updatedPlayers[index]["discord"] = e.target.value;
    } else if (e.target.className === "riot") {
      updatedPlayers[index]["riot"] = e.target.value;
    } else {
      updatedPlayers[index]["captain"] = e.target.checked;
    }
    setPlayerList(updatedPlayers);
  };

  const deletePlayer = (index: number) => {
    const tempPlayerList = [...playerList];

    if (index > -1) {
      tempPlayerList.splice(index, 1);
    }

    setPlayerList(tempPlayerList);
  };

  return (
    <>
      {
        <TeamContainer>
          <thead>
            <tr>
              <th colSpan={4}>
                <input
                  name="team-name"
                  onChange={handleTeamNameChange}
                  value={teamName}
                  required
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Discord</td>
              <td>Riot Id</td>
              <td>Captain</td>
              <td>Delete</td>
            </tr>

            {playerList.map((player: any, idx) => {
              const captainId = `captain-${idx}`;
              const discordId = `discord-${idx}`;
              const riotId = `riot-${idx}`;
              return (
                <tr key={idx}>
                  <td>
                    <input
                      type="text"
                      name={discordId}
                      data-idx={idx}
                      id={discordId}
                      className="discord"
                      onChange={handlePlayerChange}
                      value={player.discord}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name={riotId}
                      data-idx={idx}
                      id={riotId}
                      className="riot"
                      onChange={handlePlayerChange}
                      value={player.riot}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name={captainId}
                      data-idx={idx}
                      id={captainId}
                      className="captain"
                      onChange={handlePlayerChange}
                      checked={playerList[idx].captain}
                    />
                  </td>
                  <td
                    className="delete"
                    onClick={() => {
                      deletePlayer(idx);
                    }}
                  >
                    X
                  </td>
                </tr>
              );
            })}
          </tbody>
          <input type="button" value="Add a player" onClick={addPlayer} />
          <input type="submit" value="Update Team" onClick={submitTeam} />

          <input
            className="deleteBTN"
            type="button"
            value="DELETE TEAM"
            onClick={deleteCurrentTeam}
          />
        </TeamContainer>
      }
    </>
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

  .delete {
    background: hsl(0, 100%, 65%);
    &:hover {
      background: hsl(0, 100%, 45%);
      cursor: pointer;
    }
  }

  .deleteBTN {
    margin-top: 32px;
    background: hsl(0, 100%, 65%);
    &:hover {
      background: hsl(0, 100%, 45%);
      cursor: pointer;
    }
  }
`;
export default EditTeam;
