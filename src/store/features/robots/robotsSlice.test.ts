import { loadRobotsActionCreator, robotsReducer } from "./robotsSlice";
import { RobotsStructure } from "../../../types";

describe("Given the 'robotsReducer'", () => {
  describe("When is call it receives a list of two robots and an action", () => {
    test("Then it should to return a list of those two robots", () => {
      const robotsList: RobotsStructure = [
        { id: "", name: "", image: "", speed: 10, endurance: 1 },
        { id: "", name: "", image: "", speed: 11, endurance: 2 },
      ];

      const loadRobots = loadRobotsActionCreator(robotsList);

      const expectedRobotsList = robotsReducer([], loadRobots);

      expect(robotsList).toStrictEqual(expectedRobotsList);
    });
  });
});
