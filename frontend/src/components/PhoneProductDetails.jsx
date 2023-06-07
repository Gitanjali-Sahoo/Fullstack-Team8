import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { AlarmFill, Watch, Gift } from 'react-bootstrap-icons'
import { useState, useEffect } from 'react'
import axios from 'axios'

function ProductDetails() {
    const { id } = useParams()
    const [phones, setPhones] = useState(null)

    useEffect(() => {
        axios
            .get(`http://localhost:3000/smartphones/${id}`)
            .then((response) => {
                setPhones(response.data)
            })
            .catch((error) => {
                console.error('Error retrieving product:', error)
                // Handle error
            })
    }, [id])

    if (!phones) {
        return <div>Loading...</div>
    }

    return (
        <div className="product-details">
            {phones.map((phone) => (
                <DetailsWrapper key={phone.id} className="product">
                    <div className="image-wrapper">
                        <img src={phone.image} alt="image" />
                        <button className="offer-btn">
                            EXTRA 20% DISCOUNT. USE CODE EXTRA20
                        </button>
                    </div>

                    <Description className="laptop-desc">
                        <Wrapper>
                            <h2>{phone.model}</h2>
                        </Wrapper>
                        <h5
                            style={{
                                color: 'lightskyblue',
                                fontSize: '1.2rem',
                                fontWeight: 'bold'
                            }}
                        >
                            {' '}
                            {phone.brand}
                        </h5>
                        <p
                            style={{
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                color: 'red'
                            }}
                        >
                            Exclusive
                        </p>
                        <p
                            style={{
                                color: 'lightskyblue',
                                fontSize: '1.2rem',
                                fontWeight: 'bold'
                            }}
                        >
                            Price: {phone.price} Sek
                        </p>

                        <button>Add to Cart</button>

                        <p>
                            <AlarmFill />
                            -Order :- within 17 hours you will receive it.{' '}
                        </p>
                        <p>
                            <Watch />
                            -Free delivery on all orders
                        </p>
                        <p>
                            <Gift />
                            -Gift wrapping available at checkout
                        </p>
                    </Description>
                </DetailsWrapper>
            ))}
        </div>
    )
}

export default ProductDetails

const DetailsWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 4% 4% 4%;

    background-color: black;
    padding: 3%;
    flex-wrap: wrap;
    align-items: center;

    & img {
        max-width: 100%;
        height: 500px;
    }
    & p {
        font-size: 0.8rem;
    }

    .image-wrapper {
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex: 50%;
    }

    .offer-btn {
        background-color: #f8df00;
        border: none;
        color: black;
        font-weight: bold;
    }

    .offer-btn:hover {
        background-color: orange;
    }

    @media only screen and (min-width: 300px) and (max-width: 790px) {
        flex-direction: column;
        img {
            max-width: 100%;
            height: 250px;
        }
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`
const Description = styled.div`
    flex: 50%;
    padding-left: 30px;
    padding-top: 10px;
    background-color: black;

    p {
        margin-bottom: 0;
    }
    button {
        background-color: #f8df00;
        border-radius: 10px;
        margin-top: 10px;
        color: black;
        padding: 4px 25px;
        font-size: 1rem;
        border: none;
        font-weight: bold;
    }
    button:hover {
        background-color: orange;
    }
`
