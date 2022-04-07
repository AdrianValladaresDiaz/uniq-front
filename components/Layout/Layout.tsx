import React from "react";
import { MainContainer } from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <MainContainer className="main-container">
      <header></header>
      <main>{children}</main>
    </MainContainer>
  );
};

export default Layout;
