// import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'
// import styled from 'styled-components'
// import axios from 'axios'
// import { useState, useEffect } from 'react'

// function Products() {
//     const [data, setData] = useState([])

//     useEffect(() => {
//         axios
//             .get('http://localhost:3000/laptops')
//             .then((response) => {
//                 setData(response.data)
//             })
//             .catch(() => {
//                 // Handle errors
//             })
//     }, [])

//     return (
//         <Wrap>
//             <div className="laptop-container">
//                 {data.map((laptop) => (
//                     <Card style={{ width: '18rem' }} key={laptop.id}>
//                         <Card.Img
//                             className="laptop-img"
//                             variant="top"
//                             src={`/image/${laptop.image}`}
//                             alt={laptop.brand}
//                         />
//                         <Card.Body>
//                             <Card.Title className="product-text">
//                                 {laptop.model}
//                             </Card.Title>
//                             <Card.Text>SEK {laptop.price} </Card.Text>
//                             <Button className="card-btn" variant="light">
//                                 Add to cart
//                             </Button>
//                         </Card.Body>
//                     </Card>
//                 ))}
//             </div>
//         </Wrap>
//     )
// }

// export default Products
// const Wrap = styled.div`
//     background-color: white;
//     padding-top: 5%;
//     padding-bottom: 5%;

//     .laptop-container {
//         display: grid;
//         grid-template-columns: repeat(4, 1fr);
//         grid-gap: 20px;
//         justify-content: center;
//         align-items: center;
//     }

//     @media (max-width: 1200px) {
//         .laptop-container {
//             grid-template-columns: repeat(3, 1fr);
//             justify-content: center;
//             align-items: center;
//         }
//     }

//     @media (max-width: 992px) {
//         .laptop-container {
//             grid-template-columns: repeat(2, 1fr);
//             justify-content: center;
//             align-items: center;
//         }
//     }

//     @media (max-width: 576px) {
//         .laptop-container {
//             grid-template-columns: repeat(1, 1fr);
//             justify-content: center;
//             align-items: center;
//         }
//     }

//     .product-text {
//         font-size: 15px;
//         width: 100%;
//         height: 28px;
//     }

//     .card-btn {
//         border-radius: 0px;
//         font-size: 15px;
//         padding: 4px 35px;
//     }
//     .laptop-img {
//         width: 100%;
//         height: 200px;
//     }
// `

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import styled from 'styled-components'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Products() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:3000/laptops')
            .then((response) => {
                setData(response.data)
            })
            .catch(() => {
                // Handle errors
            })
    }, [])

    return (
        <Wrap>
            <h1>Laptop</h1>
            <div className="laptop-container">
                {data.map((laptop) => (
                    <Card key={laptop.id} className="laptop-card">
                        <Card.Img
                            className="laptop-img"
                            variant="top"
                            src={`/image/${laptop.image}`}
                            alt={laptop.brand}
                        />
                        <Card.Body>
                            <Card.Title className="product-text">
                                {laptop.model}
                            </Card.Title>
                            <Card.Text>SEK {laptop.price} </Card.Text>
                            <Button className="card-btn" variant="light">
                                Add to cart
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Wrap>
    )
}

export default Products

const Wrap = styled.div`
    .laptop-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 15px;
        justify-content: center;
        align-items: center;
        padding: 10px 60px;
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
    }

    .card-btn {
        border-radius: 0px;
        font-size: 15px;
        padding: 6px 35px;
        width: 100%;
        font-weight: bold;
    }
    .laptop-img {
        width: 100%;
        height: 250px;
    }
    .laptop-card {
        margin: 0 10px;
        border: none;
    }
`
