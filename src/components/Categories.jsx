import { Container, Grid } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import Products from "./Products";
import { addItem } from "../action";
import { makeCat, makeCategoriesBtn } from "./catHelper/categoriesHelper";
const Categories = ({ data, addItem }) => {
  const [activeItems, setActiveItems] = React.useState("all");

  const [btn] = makeCategoriesBtn(data, setActiveItems);

  return (
    <div>
      <Container maxWidth="xl">
        <h1>Browse our Categories</h1>
        {btn}
        <Grid container spacing={2}>
          {makeCat(data, activeItems).map((item, i) => (
            <Products {...item} key={i} addItem={addItem} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.cart.items,
});

const mapDispatchToProps = {
  addItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
