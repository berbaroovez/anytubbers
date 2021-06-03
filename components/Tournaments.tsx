import styled from "styled-components";
import TournamentCard from "./TournamentCard";
import useSWR from "swr";
import fetcher from "../util/fetcher";

export default function Tournaments() {
  const { data } = useSWR(["/api/notion"], fetcher);

  return (
    <TournamentsContainer>
      <TournamentTitle>Past Tourneys</TournamentTitle>
      <TournamentGrid>
        {data
          ? data.map((post: any, index: number) => {
              return (
                <TournamentCard
                  key={post.properties.name.title[0].text.content}
                  game={post.properties.game.select.name}
                  title={post.properties.name.title[0].text.content}
                  info={{
                    date: post.properties.date.date.start,
                    firstPlace:
                      post.properties.firstPlace.rich_text[0].text.content,
                    secondPlace:
                      post.properties.secondPlace.rich_text[0].text.content,
                    stats:
                      post.properties.stats.rich_text[0]?.text.content || "N/A",
                    bracket:
                      post.properties.bracket.rich_text[0]?.text.content ||
                      "N/A",
                  }}
                />
              );
            })
          : null}
      </TournamentGrid>
    </TournamentsContainer>
  );
}

const TournamentsContainer = styled.div`
  width: 100%;
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
