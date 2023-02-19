import { render, screen } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import { RobotStructure } from "../../types";
import RobotCard from "./RobotCard";

describe("Given a component card robot", () => {
  describe("When the component robot is render", () => {
    test("Then it should show a card with the role 'img' and the name 'Alexius'", () => {
      const robot: RobotStructure = {
        id: "",
        name: "Alexius",
        image: "",
        speed: 1,
        endurance: 10,
      };

      render(
        <Wrapper>
          <RobotCard robot={robot} />
        </Wrapper>
      );

      const result = screen.getByRole("img");

      expect(result).toBeInTheDocument();
    });
  });
});
