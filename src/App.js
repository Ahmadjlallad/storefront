import { Button } from "@mui/material";
import faker from "faker";
import React from "react";
import { connect } from "react-redux";
import { If, Then, Else } from "react-if";
import { newCart } from "./action";
import Categories from "./components/Categories";
import StickyFooter from "./components/Footer";
import Header from "./components/Header";
import data from "./components/data";
const App = ({ cart, newCart }) => {
  const [isReadyForShopping, setIsReadyForShopping] = React.useState(false);
  return (
    <>
      <Header />
      <If condition={isReadyForShopping}>
        <Then>
          <Categories data={data} />
        </Then>
        <Else>
          <Button
            variant="contained"
            onClick={() => {
              newCart({ id: faker.datatype.uuid() });
              setIsReadyForShopping(true);
            }}
          >
            Start Shopping!
          </Button>
        </Else>
      </If>

      <StickyFooter />
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = { newCart };

export default connect(mapStateToProps, mapDispatchToProps)(App);
