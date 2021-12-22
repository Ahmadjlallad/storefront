import { Button } from "@mui/material";
import faker from "faker";
import React from "react";
import { connect } from "react-redux";
import { If, Then, Else } from "react-if";
import { newCart } from "./action";
import Categories from "./components/Categories";
import StickyFooter from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import ShoppingCart from "./components/ShoppingCart";
const App = ({ newCart }) => {
  const [isReadyForShopping, setIsReadyForShopping] = React.useState(false);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route
          path="/"
          element={
            <If condition={isReadyForShopping}>
              <Then>
                <Categories />
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
          }
        />
      </Routes>
      <StickyFooter />
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { newCart };

export default connect(mapStateToProps, mapDispatchToProps)(App);
