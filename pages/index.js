import styled from "styled-components";
import Header from "./../components/Header";
const Title = styled.h1`
  font-size: 50px;
`;

export default function Home() {
  return (
    <Title>
      <Header />
    </Title>
  );
}
