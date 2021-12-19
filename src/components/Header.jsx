import { Container } from "@mui/material";
import React from "react";
import { ShoppingCart } from "@mui/icons-material";
function Header() {
  return (
    <Container
      maxWidth="xl"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        boxShadow: "#00000061 0px 4px 20px 0px",
        alignItems: "center",
      }}
    >
      <h2>Our Store</h2>

      <ShoppingCart />
    </Container>
  );
}

export default Header;
