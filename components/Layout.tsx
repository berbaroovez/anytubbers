import React from "react";
import styled from "styled-components";
import Lines from "./Lines";

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutContainer>
      <Lines />
      <InnerContainer>{children}</InnerContainer>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  font-family: "Roboto";
  width: 100%;
  position: relative;
`;
const InnerContainer = styled.div`
  font-family: "Roboto";
  margin: 0 auto;
  max-width: 700px;
  position: relative;
`;

export default Layout;
