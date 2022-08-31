import React from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader,
  CardBody,
  Card,
  CardFooter,
  Row,
  Col,
} from "reactstrap";

const Cart = ({ cartItem, buyNow, removeItem }) => {
  return (
    <Container fluid>
      <h1 className="text-success">Your Cart</h1>
      <ListGroup>
        {cartItem.map((item) => (
          <ListGroupItem key={item.id}>
            <Row>
                <Col>
                <img src={item.tinyImage} height="80" alt="image" />
                </Col>
                <Col className="text-center">
                    <div className="text-primary">{item.productName}</div>
                    <div>
                        Price : {item.productPrice}
                    <Button color="danger" onClick={() => removeItem(item)}>Remove</Button>
                    </div>
                </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>

      {
        cartItem.length >=1 ? (
            <Card className="text-center mt-3">
                <CardHeader>Grand Total </CardHeader>
                <CardBody>
                    Your amount for {cartItem.length} product is : {}
                </CardBody>
                <CardFooter>
                    <Button onClick={buyNow} color="success" >
                        Buy
                    </Button>
                </CardFooter>
            </Card>
        ) : (
            <h1 className="text-warning">Cart is empty</h1>
        )
      }
    </Container>
  );
};

export default Cart;
