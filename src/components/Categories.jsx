import { Container, Grid, Skeleton } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import Products from "./Products";
import { addItem } from "../action";
import { makeCat, makeCategoriesBtn } from "./catHelper/categoriesHelper";
import api from "../api";

import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { Else, If, Then } from "react-if";

// import data from "./data";
const Categories = ({ addItem, itemsInv }) => {
  const [activeItems, setActiveItems] = React.useState("all");
  const [items, setItems] = React.useState([]);

  const [btn] = makeCategoriesBtn(items, setActiveItems);

  React.useEffect(() => {
    setTimeout(() => {
      api
        .get("/")
        .then((res) =>
          setItems(
            res.data.sort(({ id, prvId }) => (id > prvId ? true : false))
          )
        );
    }, 500);
  }, [itemsInv]);

  return (
    <div>
      <Container maxWidth="xl">
        <h1>Browse our Categories</h1>
        {btn}
        <Grid container spacing={2}>
          <If condition={items.length <= 0}>
            <Then>
              <Grid
                container
                spacing={2}
                justifyContent={"center"}
                alignContent={"center"}
                alignItems={"center"}
              >
                <Grid item>
                  <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
                    <CircularProgress color="secondary" />
                    <CircularProgress color="success" />
                    <CircularProgress color="inherit" />
                  </Stack>
                </Grid>
              </Grid>
            </Then>
            <Else>
              {makeCat(items, activeItems).map((item, i) => (
                <Products {...item} key={i} addItem={addItem} />
              ))}
            </Else>
          </If>
        </Grid>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  itemsInv: state.cart.items,
});

const mapDispatchToProps = {
  addItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
