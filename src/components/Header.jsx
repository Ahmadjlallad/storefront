import { Container } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import SimpleCart from "./SimpleCart";

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
      <h3>
        <NavLink to={"/"} style={{ textDecoration: "none" }}>
          Our Store
        </NavLink>
      </h3>
      <SimpleCart />
    </Container>
  );
}

export default Header;
