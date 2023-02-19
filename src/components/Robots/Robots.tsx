import RobotCard from "../RobotCard/RobotCard";
import { RobotsStructure } from "../../types";
import RobotsStyled from "./RobotsStyled";
import { useEffect } from "react";
import useApi from "../../hooks/useApi/useApi";
import { useAppSelector } from "../../app/hooks";

const Robots = (): JSX.Element => {
  const { loadRobots } = useApi();

  useEffect(() => {
    loadRobots();
  }, [loadRobots]);

  const robots: RobotsStructure = useAppSelector((state) => state.robots);

  if (!robots) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1> List of Robotinhos </h1>
      <RobotsStyled>
        {robots.map((robot) => (
          <li key={robot.id}>
            <RobotCard robot={robot} />
          </li>
        ))}
      </RobotsStyled>
    </>
  );
};

export default Robots;
