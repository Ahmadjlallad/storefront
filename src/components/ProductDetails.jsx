import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { addItem } from "../action";
import api from "../api";
import { useDispatch } from "react-redux";
function ActionAreaCard() {
  const params = useParams();
  const [item, setItem] = React.useState({});
  const dispatcher = useDispatch();

  React.useEffect(() => {
    api
      .get(`/${params.id}`)
      .then((res) => {
        setItem(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, [params.id]);

  return (
    <Grid
      container
      spacing={2}
      justifyContent={"center"}
      alignContent={"center"}
      alignItems={"center"}
    >
      <Grid item>
        <Button
          variant="contained"
          fullWidth
          onClick={() => dispatcher(addItem({ ...item }))}
        >
          Buy
        </Button>
        <Card sx={{ maxWidth: 700 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={item.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                name: {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                description: {item.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Inventory Count: {item.inventoryCount}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}
export default ActionAreaCard;
