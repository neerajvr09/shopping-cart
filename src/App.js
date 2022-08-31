import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import BuySection from "./Componnets/BuySection";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import Cart from "./Componnets/Cart";

const App = () => {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    setCartItem([...cartItem, item]);
  };

  const buyNow = () => {
    setCartItem([]);
    toast("Purchase completed", { type: "success" });
  };

  const removeItem = (item) => {
    setCartItem(
      cartItem.filter((singleItem) => {
        return singleItem.id !== item.id;
      })
    );
  };

  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md={8}>
          <BuySection addToCart={addToCart} />
        </Col>
        <Col md={4}>
          <Cart cartItem={cartItem} buyNow={buyNow} removeItem={removeItem} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
