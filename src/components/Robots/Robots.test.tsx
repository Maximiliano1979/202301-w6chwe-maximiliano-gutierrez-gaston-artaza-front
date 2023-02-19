import Robots from "./Robots";
import { render, screen } from "@testing-library/react";
import { RobotsStructure } from "../../types";
import Wrapper from "../../mocks/Wrapper";

const robotsList: RobotsStructure = [
  {
    id: "",
    name: "",
    image: "",
    speed: 1,
    endurance: 2,
  },
];

jest.mock("../../store/index", () => ({
  ...jest.requireActual("../../store/index"),
  useAppSelector: () => robotsList,
}));

describe("Given a robots list component", () => {
  describe("When its render", () => {
    test("Then it should to show you a heading with the text 'List of Robotinhos'", () => {
      const insideText = "List of Robotinhos";
      render(
        <Wrapper>
          <Robots />
        </Wrapper>
      );

      const robotsCards = screen.getAllByRole("heading", { name: insideText });

      robotsCards.forEach((card) => expect(card).toBeInTheDocument());
    });
  });
});
