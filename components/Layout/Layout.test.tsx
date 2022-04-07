import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/renderWithProviders";
import Layout from "./Layout";

describe("Given the Layout component", () => {
  describe("When rendered", () => {
    test("Then it should render it's children", () => {
      const providedChildren = <article>very specific text</article>;

      renderWithProviders(<Layout>{providedChildren}</Layout>);
      const foundChildren = screen.getByText(/very specific text/i);

      expect(foundChildren).toBeInTheDocument();
    });
  });
});
