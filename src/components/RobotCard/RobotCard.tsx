import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { RobotStructure } from "../../types";

interface RobotProps {
  robot: RobotStructure;
}

const RobotCard = ({
  robot: { name, image, endurance, speed },
}: RobotProps): JSX.Element => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="340" alt="Robot Anyma" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name: {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Endurance: {endurance}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Spedd: {speed}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default RobotCard;
