import {
  deleteRobotActionCreator,
  loadRobotsActionCreator,
  robotsReducer,
} from "./robotsSlice";
import { RobotsStructure } from "../../../types";

describe("Given the 'robotsReducer'", () => {
  describe("When it receives a list of two robots and a loadRobots action", () => {
    test("Then it should return a list of those two robots", () => {
      const robotsList: RobotsStructure = [
        { id: "", name: "", image: "", speed: 10, endurance: 1 },
        { id: "", name: "", image: "", speed: 11, endurance: 2 },
      ];

      const loadRobots = loadRobotsActionCreator(robotsList);

      const expectedRobotsList = robotsReducer([], loadRobots);

      expect(robotsList).toStrictEqual(expectedRobotsList);
    });
  });

  describe("When it recieves a robots list with 2 robots, a robot id and the deleteRobot action", () => {
    test("Then it should return a new list with only one robot", () => {
      const robotsList: RobotsStructure = [
        { id: "4000", name: "", image: "", speed: 10, endurance: 1 },
        { id: "", name: "", image: "", speed: 11, endurance: 2 },
      ];

      const newState = robotsReducer(
        robotsList,
        deleteRobotActionCreator("4000")
      );
      expect(newState).toHaveLength(1);
    });
  });
});
