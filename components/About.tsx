import styled from "styled-components";

export default function About() {
  return (
    <AboutContainer>
      <AboutTitle>About</AboutTitle>
      <AboutBody>
        We're a group of people who organize various different tournaments for
        the community for the streamer Stanz. Those tournaments vary from
        Valorant to Melee to League of Legends.
      </AboutBody>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  padding-top: 150px;
  text-align: center;
`;
const AboutTitle = styled.h3`
  font-size: 3rem;
  @media (min-width: 700px) {
    font-size: 5rem;
  }
`;

const AboutBody = styled.p`
  @media (min-width: 700px) {
    font-size: 1.5rem;
  }
`;
