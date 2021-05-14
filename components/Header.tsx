import styled from "styled-components";
export default function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>Any Tubbers</HeaderTitle>
      <HeaderSubTitle>A tournament series for stanzcord</HeaderSubTitle>
      <HeaderCard></HeaderCard>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  background: hsla(221, 48%, 16%, 1);

  display: grid;
  justify-content: center;

  text-align: center;
`;
const HeaderTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: white;
`;
const HeaderSubTitle = styled.h3`
  font-size: 0.7rem;
  font-weight: 800;
  color: white;
`;
const HeaderCard = styled.div`
  margin-top: 40px;
  width: 200px;
  height: 100px;
  background: black;
`;
