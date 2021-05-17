import React, { useState } from "react";
import styled from "styled-components";
type InfoType = {
  date: string;
  firstPlace: string;
  secondPlace: string;
  stats?: string;
  bracket?: string;
};

interface CardProps {
  game: "Melee" | "LoL" | "Valorant";
  title: string;
  info?: InfoType;
}
type CardType = {
  open?: boolean;
};

const TournamentCard: React.FC<CardProps> = ({ game, title, info }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <CardContainer
      open={isClicked}
      onClick={() => {
        setIsClicked(!isClicked);
      }}
    >
      {game === "Melee" ? (
        <TournamentIcon src="/icons/Melee.png" />
      ) : game === "LoL" ? (
        <TournamentIcon src="/icons/LoL.png" />
      ) : game === "Valorant" ? (
        <TournamentIcon src="/icons/Valorant.png" />
      ) : null}

      <TorunamentTitle>{title}</TorunamentTitle>
      <TournamentInfo open={isClicked}>
        <ul>
          <li>
            <span> Event Date:</span> {info?.date || "N/A"}
          </li>
          <li>
            <span>1st: </span>
            {info?.firstPlace || "N/A"}
          </li>
          <li>
            <span>2nd: </span>
            {info?.secondPlace || "N/A"}
          </li>
          {info?.stats ? (
            info.stats === "N/A" ? null : (
              <li
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <a href={info.stats}>Stats</a>
              </li>
            )
          ) : null}
          {info?.bracket ? (
            info.bracket === "N/A" ? null : (
              <li
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <a href={info.bracket}>bracket</a>
              </li>
            )
          ) : null}
        </ul>
      </TournamentInfo>
    </CardContainer>
  );
};

const CardContainer = styled.div<CardType>`
  position: relative;
  /* left: ${(props) => (props.open ? "30px" : "0px")}; */
  cursor: pointer;
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  grid-template-rows: 0.2fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". ."
    "Info Info";

  align-items: center;

  padding: 10px;
  width: 300px;

  height: ${(props) => (props.open ? "300px" : "65px")};
  background: hsla(0, 0%, 77%, 1);
  /* hsla(0, 0%, 77%, 1); */

  border-radius: 4px;
  transition: height 0.7s ease-out;
  margin: 10px;
  text-decoration: none;
  color: black;
`;

const TournamentIcon = styled.img`
  height: 40px;
  width: 40px;
`;

const TorunamentTitle = styled.h5`
  font-size: 1rem;
  margin: 0;
`;

const TournamentInfo = styled.div<CardType>`
  grid-area: Info;

  height: 100%;
  /* display: ${(props) => (props.open ? "block" : "none")}; */
  opacity: ${(props) => (props.open ? "1" : "0")};
  transition: opacity 0.3s ease-in;

  ul {
    list-style: none;

    a {
      text-decoration: none;
      font-weight: bold;
      color: red;

      &:hover {
        color: blue;
      }
    }

    span {
      font-weight: bold;
    }
  }
`;

export default TournamentCard;
