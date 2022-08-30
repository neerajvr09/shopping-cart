import React, { useEffect, useState } from 'react'
import {Container,Row,Col} from "reactstrap"
import axios from "axios";
import { faker } from '@faker-js/faker';
import CartItem from './CartItem';

const BuySection = ({addToCart}) => {

    const [products, setProducts] = useState([])

    const localUrl = "https://myjson.dit.upm.es/api/bins/crnk"

    const fetchPhotos = async () => {
        const {data} = await axios.get(localUrl)
        const {photos} = data
        console.log(photos)

        const productDetails = photos.map(photo => ({
            smallImage : photo.src.medium,
            tinyImage : photo.src.tiny,
            productPrice : faker.commerce.price(),
            productName : faker.random.word(),
            id : faker.datatype.uuid()
        })) 
        setProducts(productDetails)
    }

    useEffect(()=>{
        fetchPhotos()
    },[])

    return(
        <Container>
            <h1 className='text-center text-success'>Shopping Cart</h1>
            <Row>
                {
                    products.map(product => (
                        <Col md={4} key={product.id}>
                            <CartItem product={product} addToCart={addToCart} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default BuySection