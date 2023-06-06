
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import styled from 'styled-components'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
function Smartphone() {
    const [phones, setPhones] = useState([])
  const [cart, setCart] = useState([]);
      useEffect(() => {
    const fetchAllPhones = async () => {
      try {
        const res = await axios.get("http://localhost:3000/smartphones");
        setPhones(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllPhones();
  }, []);

  const handlePost = async (e, phone) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/cart", phone);
      console.log("Product added to cart!");
        setCart([...cart, phone]); // Add the selected phone to the cart
        window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };


    return (
        <Wrap  >
            <div id='wrap'>


            <h1>Smartphone</h1>
            <div className="phone-container">

                {phones.map((phone) => (
                    <Card key={phone.id} className="phone-card">
                        <Card.Img
                            className="phone-img"
                            variant="top"
                            src={phone.image}
                            alt={phone.brand}
                        />
                        <Card.Body>




 <Link className='link' to={`/phone/${phone.id}`}>
                            <Card.Title className="product-text">
                                {phone.model}
                                </Card.Title>
                                </Link>
                            <Card.Text>SEK {phone.price} </Card.Text>
                            <Button onClick={(e) => handlePost(e, phone)} className="card-btn" variant="light">
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

export default Smartphone

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
.link{
    text-decoration:none;
}


    .phone-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 15px;

        padding: 60px 60px;

    }

    @media (max-width: 1200px) {
        .phone-container {
            grid-template-columns: repeat(3, 1fr);

        }
    }

    @media (max-width: 992px) {
        .phone-container {
            grid-template-columns: repeat(2, 1fr);
        }
    }
 @media (max-width: 576px) {
        .phone-container {
            grid-template-columns: repeat(1, 1fr);

            margin-right:60px;
        }
        #wrap h1{
    margin-left: 0px;
margin-right:60px;

}
    }


    .product-text {
        font-size: 15px;
        width: 100%;
        height: 28px;
         margin-top:3vh;

    }

    .card-btn {
        border-radius: 5px;
        border:none;
        font-size: 15px;
        padding: 6px 35px;
        width: 100%;
        font-weight: bold;

    }
    .phone-img {
        width: 100%;
        height: auto;
    }
    .phone-card {
        margin: 0 10px;
        border: none;

    }

}



`
