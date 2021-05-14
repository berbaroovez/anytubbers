import React from "react";
import styled from "styled-components";

const Layout: React.FC = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

const LayoutContainer = styled.div`
  font-family: "Roboto";
  margin: 0 auto;
  max-width: 700px;
`;

export default Layout;
