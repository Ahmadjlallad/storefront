import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Product({
  category,
  description,
  image,
  inventoryCount,
  name,
  price,
  addItem,
  id,
}) {
  const navigate = useNavigate();
  return (
    <Grid item xs={4} marginTop={5}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Inventory Count: {inventoryCount}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() =>
              addItem({
                item: {
                  id,
                  category,
                  description,
                  image,
                  inventoryCount,
                  name,
                  price,
                },
              })
            }
          >
            Add to Cart
          </Button>
          <Button size="small" onClick={() => navigate(`/product/${id}`)}>
            view details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
