import axios from 'axios';
import {useState, useEffect} from 'react'
import styled from 'styled-components';


const HeadPhoneProducts = () => {
    const [headphones, setHeadphones] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/headPhones')
          .then(response => {
            setHeadphones(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

  return (
    <DIV>
        <div className='container'>
    <div className='grid-container'>
        {headphones.map(headphone =>(
            <div className='grid-item' key={headphone.id}>
                <img src={headphone.image} />
              <div className='productsInfo'>  <p>{headphone.brand}</p>
                <p className='headphone-model'>{headphone.model}</p>
                <p>{headphone.price} Kr</p>
                <button> Add to cart</button></div>
            </div>
        ))}
    </div>
    </div>
    </DIV>
  )
}

export default HeadPhoneProducts

const DIV = styled.div`
.grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    padding: 10px 60px;
}

.grid-item {
    margin: 0 10px;
        border: none;
}

img {
    width: 100%;
    height: 250px;
    /* box-sizing:content-box; */
}
.headphone-model{
    font-size: 15px;
    width: 100%;
    height: 28px;
}

button{
    background: white;
    color: black;
    border-radius: 0px;
    font-size: 15px;
    padding: 6px 35px;
    width: 100%;
    font-weight: bold;
}

p{
    margin: 5px;
}

@media (max-width: 1200px) {
        .grid-container {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (max-width: 992px) {
        .grid-container {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 576px) {
        .grid-container {
            grid-template-columns: repeat(1, 1fr);
        }
    }

`
