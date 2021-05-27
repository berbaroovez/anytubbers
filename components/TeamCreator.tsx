import styled from "styled-components";
import { createTeam } from "../util/db";
import React, { useState, useEffect } from "react";
import { Player } from "../util/GlobalInterfaces";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const TeamCreator = () => {
  const blankPlayer: Player = { captain: false, league: "", discord: "" };

  const [teamName, setTeamName] = useState("");
  const [playerState, setPlayerState] = useState<Player[]>([
    { ...blankPlayer },
  ]);

  const addPlayer = () => {
    setPlayerState([...playerState, { ...blankPlayer }]);
  };

  const handleTeamNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(e.target.value);
  };

  const handlePlayerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedPlayers = [...playerState];

    //! means that we know it will not be null
    const index = parseInt(e.target.dataset.idx!);

    // updatedPlayers
    if (e.target.className === "discord") {
      console.log(e.target.value);
      updatedPlayers[index]["discord"] = e.target.value;
    } else if (e.target.className === "league") {
      updatedPlayers[index]["league"] = e.target.value;
    } else {
      updatedPlayers[index]["captain"] = e.target.checked;
    }
    setPlayerState(updatedPlayers);
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    createTeam({
      name: teamName,
      players: [...playerState],
    });
    toast("Team Added");
    setPlayerState([{ ...blankPlayer }]);
    setTeamName("");
  };

  const deletePlayer = (index: number) => {
    const playerList = [...playerState];

    if (index > -1) {
      playerList.splice(index, 1);
    }

    setPlayerState(playerList);
  };
  return (
    <TeamCreatorContainer>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form onSubmit={submitForm}>
        <label htmlFor="team-name">Team Name</label>
        <input
          name="team-name"
          onChange={handleTeamNameChange}
          value={teamName}
          required
        />
        <PlayerContainer>
          {playerState.map((val, idx) => {
            const captainId = `captain-${idx}`;
            const discordId = `discord-${idx}`;
            const leagueId = `league-${idx}`;
            return (
              <div key={`player-${idx}`}>
                <label htmlFor={discordId}>{`Discord`}</label>
                <input
                  type="text"
                  name={discordId}
                  data-idx={idx}
                  id={discordId}
                  className="discord"
                  onChange={handlePlayerChange}
                  value={playerState[idx].discord}
                  required
                />
                <label htmlFor={leagueId}>{`League`}</label>
                <input
                  type="text"
                  name={leagueId}
                  data-idx={idx}
                  id={leagueId}
                  className="league"
                  onChange={handlePlayerChange}
                  value={playerState[idx].league}
                  required
                />
                <label htmlFor={captainId}>{`Captain`}</label>
                <input
                  type="checkbox"
                  name={captainId}
                  data-idx={idx}
                  id={captainId}
                  className="captain"
                  onChange={handlePlayerChange}
                  checked={playerState[idx].captain}
                />
                <input
                  type="button"
                  value="X"
                  onClick={() => {
                    deletePlayer(idx);
                  }}
                />
              </div>
            );
          })}
        </PlayerContainer>
        <input type="button" value="Add a player" onClick={addPlayer} />
        <input type="submit" value="Add Team" />
      </form>
    </TeamCreatorContainer>
  );
};

const TeamCreatorContainer = styled.div``;

const PlayerContainer = styled.div`
  input[type="button"] {
    background: red;
  }
`;

const TextInput = styled.input``;
export default TeamCreator;
