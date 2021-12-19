import React from "react";
import { connect } from "react-redux";

import { newCart } from "./action";

const App = ({ cart, newCart }) => {
  return <button onClick={() => newCart({ id: 1 })}>Start Shopping!</button>;
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = { newCart };

export default connect(mapStateToProps, mapDispatchToProps)(App);
