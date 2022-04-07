import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import lightTheme from "../styles/lightTheme";
import { render } from "@testing-library/react";

interface wrappedChildren {
  children: ReactNode;
}

const renderWithProviders = (element: JSX.Element) => {
  const Providers = ({ children }: wrappedChildren) => (
    <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
  );

  return render(element, { wrapper: Providers });
};

export default renderWithProviders;
