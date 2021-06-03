import styled from "styled-components";

export default function Lines() {
  return (
    <>
      <LeftSide />
      <RightSide />
    </>
  );
}

const RightSide = styled.div`
  position: absolute;
  height: 100%;
  width: 10%;

  border-left: 2px solid hsla(0, 0%, 95%, 1);
  z-index: 0;
  top: 0;
  right: 0;
  @media (max-width: 700px) {
    border: none;
  }
`;

const LeftSide = styled.div`
  position: absolute;
  height: 100%;
  width: 10%;
  border-right: 2px solid hsla(0, 0%, 95%, 1);
  z-index: 0;
  top: 0;
  left: 0;
  @media (max-width: 700px) {
    border: none;
  }
`;
