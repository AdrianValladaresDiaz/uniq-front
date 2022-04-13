import { screen, waitFor } from "@testing-library/react";
import renderWithProviders from "../../mocks/renderWithProviders";
import Hero from "./Hero";
import userEvent from "@testing-library/user-event";

describe("Given a Hero component", () => {
  describe("When rendered with a list of contents as a prop", () => {
    test("Then it should show only the first item in that list", () => {
      const listOfContent = [1, 2, 3, 4];

      renderWithProviders(<Hero content={listOfContent} />);

      const firstItem = screen.getByText("1");

      expect(firstItem).toBeInTheDocument();
    });
  });

  describe("When rendered with a content list of length 1", () => {
    test.todo("Then the hero should not render any buttons");
  });

  describe("When rendered with buttons", () => {
    test("Pressing the left or right button should move the hero", async () => {
      const listOfContent = [1, 2, 3, 4];

      renderWithProviders(<Hero content={listOfContent} />);
      const leftButton = screen.getByTitle(/move hero left/i);
      const rightButton = screen.getByTitle(/move hero right/i);
      const centerContainer = screen.getByText("1");
      const rightContainer = screen.getByText("2");

      expect(centerContainer.textContent).toBe(`${listOfContent[0]}`);
      expect(rightContainer.textContent).toBe(`${listOfContent[1]}`);

      await userEvent.click(leftButton);

      await waitFor(
        () => expect(centerContainer.textContent).toBe(`${listOfContent[3]}`),
        { timeout: 2000 }
      );

      expect(centerContainer.textContent).toBe(`${listOfContent[3]}`);
      expect(rightContainer.textContent).toBe(`${listOfContent[0]}`);

      await userEvent.click(rightButton);

      await waitFor(
        () => expect(centerContainer.textContent).toBe(`${listOfContent[0]}`),
        { timeout: 2000 }
      );

      expect(centerContainer.textContent).toBe(`${listOfContent[0]}`);
      expect(rightContainer.textContent).toBe(`${listOfContent[1]}`);
    });
  });
});
