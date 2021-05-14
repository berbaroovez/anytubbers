import styled from "styled-components";
import DiscordLogo from "./DiscordLogo";
export default function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>Any Tubbers</HeaderTitle>
      <HeaderSubTitle>A tournament series for stanzcord</HeaderSubTitle>
      <HeaderCard>
        <h4>Join the discord to stay up to date on all tournaments</h4>
        <LogoContainer href="https://discord.gg/rbbuht8">
          <DiscordLogo />
        </LogoContainer>
      </HeaderCard>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  background: hsla(221, 48%, 16%, 1);

  display: grid;
  justify-items: center;

  font-family: "Roboto";
  text-align: center;

  @media (min-width: 700px) {
    height: 300px;
  }
`;
const HeaderTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: white;

  @media (min-width: 700px) {
    font-size: 5rem;
  }
`;
const HeaderSubTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: 800;
  color: white;
  margin-bottom: 20px;
  @media (min-width: 700px) {
    font-size: 1.5rem;
  }
`;
const HeaderCard = styled.div`
  display: grid;
  justify-items: center;
  padding: 1rem;
  width: 80%;
  height: 150px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  h4 {
    font-size: 1rem;
  }

  @media (min-width: 700px) {
    width: 400px;

    h4 {
      font-size: 1.5rem;
    }
  }
`;

const LogoContainer = styled.a`
  width: 40px;
  height: 40px;
  transition: transform 0.7s ease-in-out;
  &:hover {
    transform: rotate(360deg);
  }
`;
