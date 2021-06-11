import styled from "styled-components";

const AnimatedCard = () => {
  return (
    <Game>
      <Rank>3</Rank>
      <Front>
        <img src="./minecraft.jpg" />
        <h3>Minecraft</h3>
        <Stats>
          <p>539.9k</p>
          <Streamers>
            <img src="./streamer_1.jpg" />
            <img src="./streamer_2.jpg" />
            <img src="./streamer_3.jpg" />
          </Streamers>
        </Stats>
      </Front>
      <Back>
        <StreamingInfo>
          <GameStat>
            559k <span>watching </span>
          </GameStat>
          <GameStat>
            25.8k <span>streams</span>
          </GameStat>
        </StreamingInfo>
        <button>See more streams</button>
        <StreamersBack>
          <Streamer>
            <Name>Gamer 1</Name>
            <Number>36.1k</Number>
          </Streamer>
          <Streamer>
            <Name>Gamer 2</Name>
            <Number>16.1k</Number>
          </Streamer>
          <Streamer>
            <Name>Gamer 3</Name>
            <Number>10.5k</Number>
          </Streamer>
        </StreamersBack>
      </Back>
      <Background></Background>
    </Game>
  );
};

const Background = styled.div`
  background: #234;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;

  transform: scale(0.2, 0.9);

  border-radius: 0.5em;
  opacity: 0;
`;
const Front = styled.div`
  h3 {
    margin: 0.4em 0;
  }

  img {
    border-radius: 0.5em;
  }

  transition: 250ms;
`;

const Game = styled.div`
    --clr-dark: rgb(13,17,19)
    --clr-light: #fff;
    --clr-accent: rgb(222,52,0)
    --clr-accent-dark: rgb(163,38,0);
    --clr-secondary: rgb(0,62,162)

  font-family: sans-serif;
  h1,
  h2,
  h3,
  p {
    margin: 0;
  }
  img {
    max-width: 100%;
  }
  position: relative;
  width: 12.5em;

  &:hover{

        ${Front}{
            transform: translateY(-30%) scale(.8);
  
        }
       ${Background}{
             transition: transform 250ms ease-in-out,
                        opacity 100ms linear;
           opacity: 1;
           transform:scale(1.4,1.2);
       }
  }
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Streamers = styled.div`
  display: flex;
  img {
    width: 2em;
    height: 2em;
    border-radius: 50%;
    border: 1px solid white;
    &:nth-of-type(1) {
      transform: translateX(50%);
      z-index: 1;
    }
    &:nth-of-type(2) {
      transform: translateX(25%);
    }
  }
`;
const Rank = styled.div`
  position: absolute;
  right: 1em;
  top: 0;

  background: rgba(0, 0, 0, 0.65);
  padding: 0.5em 0.5em;
  color: white;
  font-weight: bold;
  font-size: 1.125rem;
  clip-path: polygon(0% 0%, 100% 0, 100% 100%, 50% 85%, 0% 100%);
`;

const Back = styled.div`
  display: none;
`;
const StreamingInfo = styled.div``;
const GameStat = styled.p``;
const StreamersBack = styled.div``;
const Streamer = styled.div``;
const Name = styled.p``;
const Number = styled.p``;

export default AnimatedCard;
