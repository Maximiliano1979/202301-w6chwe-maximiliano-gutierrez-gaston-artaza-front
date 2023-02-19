import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { RobotStructure } from "../../types";
import RobotCardStyles from "./RobotCardStyles";
import useApi from "../../hooks/useApi/useApi";

export interface RobotProps {
  robot: RobotStructure;
}

const RobotCard = ({
  robot: { name, image, endurance, speed, id },
}: RobotProps): JSX.Element => {
  const { deleteRobot } = useApi();

  return (
    <RobotCardStyles>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="340"
          alt="Robot Anyma"
          image={image}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="typography-title"
          >
            Name: {name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="typography"
          >
            Endurance: {endurance}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="typography"
          >
            Speed: {speed}
          </Typography>
        </CardContent>
        <CardActions className="button-container">
          <Button size="large">Show more</Button>
          <Button size="large" onClick={() => deleteRobot(id)}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </RobotCardStyles>
  );
};

export default RobotCard;
