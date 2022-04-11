import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/renderWithProviders";
import Hero from "./Hero";

describe("Given a Hero component", () => {
  describe("When rendered with a list of contents as a prop", () => {
    test("Then it should show only the first item in that list", () => {
      const listOfContent = [1, 2, 3, 4];

      renderWithProviders(<Hero content={listOfContent} />);

      const firstItem = screen.getByText("1");

      expect(firstItem).toBeInTheDocument();
    });
  });
});
