export interface RobotStructure {
  id: string;
  name: string;
  image: string;
  speed: number;
  endurance: number;
}

export type RobotsStructure = RobotStructure[];

export interface RobotApiResponse {
  robot: RobotsStructure;
}
