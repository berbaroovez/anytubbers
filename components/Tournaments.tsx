import styled from "styled-components";
import TournamentCard from "./TournamentCard";
export default function Tournaments() {
  return (
    <TournamentsContainer>
      <TournamentTitle>Past Tournys</TournamentTitle>
      <TournamentGrid>
        <TournamentCard game="Valorant" title="Any Tubbers 1" />
        <TournamentCard game="Valorant" title="Any Tubbers 2" />
        <TournamentCard game="Melee" title="Any Tubbers Melee" />
        <TournamentCard game="Valorant" title="Any Tubbers 3" />
        <TournamentCard game="Valorant" title="Any Tubbers 4" />
        <TournamentCard game="Valorant" title="Any Tubbers 5" />
        <TournamentCard game="Valorant" title="Any Tubbers 6" />
        <TournamentCard game="LoL" title="Any Tubbers LoL" />
      </TournamentGrid>
    </TournamentsContainer>
  );
}

const TournamentsContainer = styled.div`
  display: grid;
  justify-items: center;
  padding-bottom: 100px;
`;

const TournamentGrid = styled.div`
  display: grid;
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
`;

const TournamentTitle = styled.h3`
  text-align: center;
  font-size: 3rem;
  @media (min-width: 700px) {
    font-size: 5rem;
  }
`;
