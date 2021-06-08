import styled from "styled-components";
import { PublicSkeleton } from "../components/PublicSkeleton";
import TeamList from "../components/TeamList";
export default function Teams() {
  return (
    <PublicSkeleton>
      <TeamList />
    </PublicSkeleton>
  );
}
// const TeamContainer = styled.div`
//   width: 100%;
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
// `;
