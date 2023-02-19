import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { RobotStructure } from "../../types";
import RobotCardStyles from "./RobotCardStyles";

export interface RobotProps {
  robot: RobotStructure;
}

const RobotCard = ({
  robot: { name, image, endurance, speed },
}: RobotProps): JSX.Element => {
  return (
    <RobotCardStyles>
      <Card className="card" sx={{ maxWidth: 345 }}>
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
            className="typography"
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
          <Button size="large" className="button">
            Delete
          </Button>
        </CardActions>
      </Card>
    </RobotCardStyles>
  );
};

export default RobotCard;
