import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import styled from 'styled-components'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Products() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:3000/laptops1')
            .then((response) => {
                setData(response.data)
            })
            .catch(() => {
                // Handle errors
            })
    }, [])

    return (
        <Wrap>
            <div id='wrap'>
            <h1>Laptop</h1>
            <div className="laptop-container">
                {data.map((laptop) => (
                    <Card key={laptop.id} className="laptop-card">
                        {/* <Card.Img
                            className="laptop-img"
                            variant="top"
                            src={laptop.image}
                            alt={laptop.brand}
                        /> */}
                        <Card.Img
                            className="laptop-img"
                            variant="top"
                            src={laptop.image}
                            alt={laptop.brand}
                        />
                        <Card.Body>
                            <Link
                                to={`/laptop/${laptop.id}`}
                                className="laptop-link"
                            >
                                <Card.Title className="product-text">
                                    {laptop.model}
                                </Card.Title>
                            </Link>
                            <Card.Text>SEK {laptop.price} </Card.Text>
                            <Button className="card-btn" variant="light">
                                Add to cart
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
                </div>
                </div>
        </Wrap>
    )
}

export default Products

const Wrap = styled.div`

#wrap {
    display: flex;
    flex-direction: column;
 justify-content: center;
    margin-top: 100px;
    padding-bottom: 100px;

}
#wrap h1{
    margin-left: 65px;

}
    .laptop-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 15px;
        justify-content: center;
        align-items: center;
        padding: 10px 60px;
        scroll-behavior: smooth;
        overflow-y: auto; /* Enable vertical scrolling */
        max-height: 100%; /* Set a maximum height for scrolling */
    }

    @media (max-width: 1200px) {
        .laptop-container {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (max-width: 992px) {
        .laptop-container {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 576px) {
        .laptop-container {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    .product-text {
        font-size: 15px;
        width: 100%;
        height: 28px;
        text-decoration: none;
    }

    .card-btn {
        border-radius: 5px;
        font-size: 15px;
        padding: 6px 35px;
        width: 100%;
        font-weight: bold;
        border: none;
    }
    .laptop-img {
        width: 100%;
        height: 250px;
    }
    .laptop-card {
        margin: 0 10px;
        border: none;
    }
    .laptop-link {
        text-decoration: none;
    }
`
