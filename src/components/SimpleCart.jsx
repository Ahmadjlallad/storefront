import React from "react";
import { connect } from "react-redux";
import { ShoppingCart } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Fab } from "@mui/material";
import { green, red } from "@mui/material/colors";
import { changeQuantity, deleteItem } from "../action";
import { If, Then } from "react-if";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { useNavigate } from "react-router-dom";
const SimpleCart = ({ items, changeQuantity, deleteItem }) => {
  const nav = useNavigate();
  return (
    <div
      style={{
        width: "40%",
      }}
    >
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Fab variant="extended" size="small" color="primary" aria-label="add">
            <ShoppingCart />
            {items.length > 0 ? items.length : null}
          </Fab>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {items.map((item) => (
              <ListItem disablePadding key={item.id}>
                <ListItemButton>
                  <ListItemText
                    primary={item.name}
                    onClick={() => {
                      nav("/cart");
                    }}
                  />
                  <If condition={item.quantity > 1}>
                    <Then>
                      <Fab
                        color="small"
                        aria-label="add"
                        size="small"
                        style={{ backgroundColor: red[300] }}
                        onClick={() =>
                          changeQuantity({ id: item.id, singe: -1 })
                        }
                      >
                        <RemoveRoundedIcon />
                      </Fab>
                    </Then>
                  </If>
                  <Fab
                    variant="extended"
                    size="small"
                    color="primary"
                    aria-label="add"
                  >
                    {item.quantity}
                  </Fab>

                  <Fab
                    color={green[500]}
                    aria-label="add"
                    size="small"
                    style={{ backgroundColor: green[500] }}
                    onClick={() => changeQuantity({ id: item.id, singe: +1 })}
                  >
                    <AddIcon />
                  </Fab>
                  <Fab
                    aria-label="add"
                    size="small"
                    style={{ backgroundColor: red[500] }}
                    onClick={() => {
                      deleteItem({ id: item.id });
                    }}
                  >
                    <DeleteOutlineRoundedIcon />
                  </Fab>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.cart.items || [],
});

const mapDispatchToProps = {
  changeQuantity,
  deleteItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
