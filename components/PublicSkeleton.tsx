import React from "react";
import styled from "styled-components";
import NextLink from "next/link";
type PublicProps = {
  children: React.ReactNode;
};

const PublicSkeleton = ({ children }: PublicProps) => {
  return (
    <PublicContainer>
      <NavBar>
        <NextLink href="/" as={`/`} passHref>
          The Tub
        </NextLink>
      </NavBar>
      <ChildrenContainer>{children}</ChildrenContainer>
    </PublicContainer>
  );
};

const PublicContainer = styled.div`
  font-family: sans-serif;
`;
const ChildrenContainer = styled.div`
  display: grid;
  justify-content: center;
`;

const NavBar = styled.nav`
  width: 80%;
  height: 50px;
  background: hsl(220, 48%, 16%);
  margin: 20px auto;

  border-radius: 20px;

  color: white;
  display: grid;
  grid-template-columns: repeat(2, fit-content(120px));
  align-items: center;
  justify-content: space-between;

  a {
    font-weight: bold;
    color: white;
    text-decoration: none;
    margin: 0 20px;
    padding: 2px 5px;
    border-radius: 5px;
    &:hover {
      background: hsl(220, 48%, 36%);
    }
  }
`;

export { PublicSkeleton };
