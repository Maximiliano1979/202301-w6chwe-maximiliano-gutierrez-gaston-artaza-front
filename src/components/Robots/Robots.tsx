import RobotCard from "../RobotCard/RobotCard";
import { RobotStructure } from "../../types";
import RobotsStyled from "./RobotsStyled";

const data: RobotStructure[] = [
  {
    name: "Maxymus",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.7T5pMoBz7dsBllOSXamURwHaHZ&pid=Api&P=0",
    speed: 5,
    endurance: 5,
  },

  {
    name: "Marcus",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.7T5pMoBz7dsBllOSXamURwHaHZ&pid=Api&P=0",
    speed: 6,
    endurance: 5,
  },
  {
    name: "Danielius",
    image:
      "https://cenie.eu/sites/default/files/styles/thumbnail-1180x664/public/field/image/fitore-f-qks8oq4d_r0-unsplash_0.jpg?itok=GSOpdQ-9",
    speed: 8,
    endurance: 5,
  },
  {
    name: "Luisinius",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8noqyVyPrCgkcum08PAoRbg3wiGAtfUCQMQ&usqp=CAU",
    speed: 5,
    endurance: 5,
  },

  {
    name: "Alexius",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.7T5pMoBz7dsBllOSXamURwHaHZ&pid=Api&P=0",
    speed: 6,
    endurance: 5,
  },
  {
    name: "Vidas",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMMMvYLyLJPw0dAUhsHTvm0gP79wFN9wqY2w&usqp=CAU",
    speed: 9,
    endurance: 9,
  },
];

const Robots = (): JSX.Element => {
  return (
    <RobotsStyled>
      {data.map((robot) => (
        <li key={robot.name}>
          <RobotCard robot={robot} />
        </li>
      ))}
    </RobotsStyled>
  );
};

export default Robots;
