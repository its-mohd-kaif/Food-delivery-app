import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { products } from "../Data";
import Button from "@mui/material/Button";
import "./Card.css";
import { noteContext } from "../App";

export default function MediaControlCard() {
  // UseContext For Data Transfer
  const item = React.useContext(noteContext);
  // Add To Cart Function
  const addToCart = (e) => {
    alert("Product Added Successfully!!");
    let productId = Number(e.target.value);
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === productId) {
        for (let j = 0; j < item.data.length; j++) {
          if (item.data[j].id === productId) {
            item.data[j].quantity++;
            item.setData([...item.data]);
            return;
          }
        }
        item.data.push(products[i]);
        item.setData([...item.data]);
      }
    }
  };

  return (
    <>
      <div className="containerCart">
        {products.map((val) => (
          <div className="cart">
            <Card sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    {val.name}
                  </Typography>
                  <Typography component="div" variant="h5">
                    <img src={val.typeImg} alt="" />{" "}
                    <span style={{ fontSize: "22px", color: "gray" }}>
                      {val.type}
                    </span>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    ₹ {val.price}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    <Button
                      value={val.id}
                      onClick={addToCart}
                      variant="outlined"
                    >
                      ADD TO CART
                    </Button>
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                ></Box>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 151, height: 151 }}
                image={val.image}
                alt="Live from space album cover"
              />
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
