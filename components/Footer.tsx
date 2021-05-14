import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <a href="discord.gg/stanz">Stanz' Discord</a>
      <a href="discord.gg/stanz">Any Tubbers' Discord</a>
      <p>
        Made and maintained by
        <a href="https://www.twitter.com/berbaroovez"> Berbaroovez</a>
      </p>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  background: hsla(0, 0%, 95%, 1);
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr 1fr;
    height: 50px;
    align-content: center;
  }
`;
