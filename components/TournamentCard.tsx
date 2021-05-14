import React from "react";
import styled from "styled-components";

interface CardProps {
  game: "Melee" | "LoL" | "Valorant";
  title: string;
}

const TournamentCard: React.FC<CardProps> = ({ game, title }) => {
  return (
    <CardContainer>
      {game === "Melee" ? (
        <TournamentIcon src="/icons/Melee.png" />
      ) : game === "LoL" ? (
        <TournamentIcon src="/icons/LoL.png" />
      ) : game === "Valorant" ? (
        <TournamentIcon src="/icons/Valorant.png" />
      ) : null}

      <TorunamentTitle>{title}</TorunamentTitle>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  align-items: center;

  padding: 10px;
  width: 300px;
  height: 65px;
  background: hsla(0, 0%, 77%, 1);

  border-radius: 4px;

  margin: 10px;
`;

const TournamentIcon = styled.img`
  height: 40px;
  width: 40px;
`;

const TorunamentTitle = styled.h5`
  font-size: 1.5rem;
  margin: 0;
`;

export default TournamentCard;
