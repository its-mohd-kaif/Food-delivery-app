import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import arrow from "../Images/arrow.png";
import "./Cart.css";
import { noteContext } from "../App";

export default function SwipeableTemporaryDrawer() {
  let cartData = React.useContext(noteContext);
  // useState of Price Value
  const [price, setPrice] = React.useState(0);

  // When Page render total price will be display
  React.useEffect(() => {
    let tempPrice = 0;
    for (let i = 0; i < cartData.data.length; i++) {
      tempPrice += cartData.data[i].price * cartData.data[i].quantity;
    }
    setPrice(tempPrice);
  }, [cartData.data]);
  // Delete button function
  const deleteBtn = (val) => {
    let tempPrice = 0;
    for (let i = 0; i < cartData.data.length; i++) {
      if (val === cartData.data[i].id) {
        let flag = window.confirm("Sure You Want To Remove Product !!!");
        if (flag === true) {
          tempPrice =
            price - cartData.data[i].price * cartData.data[i].quantity;
          setPrice(tempPrice);
          cartData.data.splice(i, 1);
        }
      }
    }
    cartData.setData([...cartData.data]);
  };
  // Increment button function
  const increment = (val) => {
    let tempPrice = 0;
    for (let i = 0; i < cartData.data.length; i++) {
      if (val === cartData.data[i].id) {
        cartData.data[i].quantity++;
        tempPrice = price + cartData.data[i].price * cartData.data[i].quantity;
        setPrice(tempPrice);
        cartData.setData([...cartData.data]);
      }
    }
  };
  // Decrement button function
  const decrement = (val) => {
    let tempPrice = 0;
    for (let i = 0; i < cartData.data.length; i++) {
      if (val === cartData.data[i].id) {
        if (cartData.data[i].quantity === 1) {
          let flag = window.confirm("Sure You Want To Remove Product !!!");
          if (flag === true) {
            tempPrice =
              price - cartData.data[i].price * cartData.data[i].quantity;
            setPrice(tempPrice);
            cartData.data.splice(i, 1);
            cartData.setData([...cartData.data]);
            break;
          }
        } else {
          tempPrice =
            price - cartData.data[i].price * cartData.data[i].quantity;
          setPrice(tempPrice);
          cartData.data[i].quantity--;
          cartData.setData([...cartData.data]);
        }
      }
    }
  };
  // Empty Cart Function
  const cartDelete = () => {
    let flag = window.confirm("Are You Sure ??");
    if (flag === true) {
      cartData.data.length = 0;
      setPrice(0);
      cartData.setData([...cartData.data]);
    }
  };
  // Checkout Button Function
  const checkOutBtn = () => {
    if (price === 0) {
      alert("Buy Some Product");
    } else {
      alert("Checkout Successfully");
      cartData.data.length = 0;
      setPrice(0);
      cartData.setData([...cartData.data]);
    }
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const homeDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
    >
      <div>
        <div>
          <center>
            <div style={{ marginTop: "2%" }}>
              <Button
                variant="contained"
                color="success"
                onClick={homeDrawer(anchor, false)}
              >
                Home
              </Button>
            </div>
            <div className="CartDiv">
              <div className="header"></div>
              <div className="tableDisplay">
                <div>
                  <div className="rowTitle">
                    <div className="column1Title">
                      <h2>Shoping Cart</h2>
                    </div>
                    <div className="column2Title">
                      <button className="emptyBtn" onClick={cartDelete}>
                        Empty Cart
                      </button>
                    </div>
                  </div>
                  {/* Display using map */}
                  {cartData.data.map((ele) => (
                    <div className="rowCart grid-container">
                      <div className="column1Cart grid-item">
                        <img className="cartImg" src={ele.image} alt="" />
                      </div>
                      <div className="column2Cart grid-item">
                        <span className="nameProduct">{ele.name}</span>
                      </div>
                      <div className="column5Cart grid-item">
                        <span>Price ₹ {ele.price}</span>
                      </div>
                      <div className="column3Cart grid-item">
                        <button
                          className="plus"
                          onClick={() => {
                            increment(ele.id);
                          }}
                        >
                          ➕
                        </button>
                        {ele.quantity}
                        <button
                          className="minus"
                          onClick={() => {
                            decrement(ele.id);
                          }}
                        >
                          ➖
                        </button>
                      </div>
                      <div className="column4Cart grid-item">
                        <button
                          className="deleteBtn1"
                          onClick={() => {
                            deleteBtn(ele.id);
                          }}
                        >
                          ❌
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cartPriceDiv">
                  <div>
                    <h2>Total Price : ₹ {price}</h2>
                  </div>
                  <button
                    style={{ marginRight: "1%" }}
                    className="deleteBtn"
                    onClick={checkOutBtn}
                  >
                    Checkout
                  </button>
                  <br></br>
                  <br></br>
                </div>
              </div>
            </div>
          </center>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className="bottomDrawer">
            <div>
              <div className="upBtn">
                <Button onClick={toggleDrawer(anchor, true)}>
                  <img src={arrow} alt="" />
                </Button>
              </div>
            </div>
            <div>
              <Button onClick={toggleDrawer(anchor, true)}>
                Your Orders ({cartData.data.length})
              </Button>
            </div>
            <div>
              <Button onClick={toggleDrawer(anchor, true)}>
                Subtotal ₹ {price}
              </Button>
            </div>

            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
