import React from 'react'
import {Card,CardImg,CardBody,CardTitle,CardText,Button} from "reactstrap"

const CartItem = ({product}) => {
  return (
    <Card className='mt-2 mb-1'>
      <CardImg top height="250" width="100%" src={product.smallImage} />
      <CardBody className='text-center'>
        <CardTitle>{product.productName}</CardTitle>
        <CardText className="secondary">Price Rs. {product.productPrice} </CardText>
        <Button color="success">Add</Button>
      </CardBody>
    </Card>
  )
}

export default CartItem;
