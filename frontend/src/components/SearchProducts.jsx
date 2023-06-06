import axios from "axios";
import {useEffect, useState} from 'react'
import styled from "styled-components";


export const SearchProducts = () => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState([])
    useEffect(() =>{
    axios.get('http://localhost:3000/SearchProducts')
    .then(response => {
        setProducts(response.data)
        setSearch(response.data)
        })
        .catch (error =>  {
console.error(error)
 })
        }, []);

        const handleFilter = (e) => {
            setSearch(products.filter( result => result.brand.toLowerCase().includes(e.target.value)))
        }
  return (
    <DIV>

    <div className='container'>
     <input type="text" placeholder="Search for products..." onChange={handleFilter}/>

    <div className='grid-container'>
        {search.map(product =>(
            <div className='grid-item' key={product.id}>
           <img src={product.image} />
              <div className='productsInfo'>  <p>{product.brand}</p>
                <p className='headphone-model'>{product.model}</p>
                <p className="price">{product.price} Kr</p>
                <button> Add to cart</button></div>
            </div>
        ))}
    </div>
    </div>
    </DIV>
  )
}

const DIV = styled.div`
.grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    padding: 100px 60px;
}
input{
    width: 40%;
    position: relative;
    left: 30%;
    top: 40px;
    background-color: white;
    border-radius: 8px;
    height: 35px;
    color: black;
}
.grid-item {
    margin: 0 10px;
    border: none;
}

img {
    width: 100%;
    height: 250px;
    margin-top: 8vh;
}
.headphone-model{
    font-size: 15px;
    width: 100%;
    height: 28px;
}

button{
    background-color: white;
    color: black;
    font-size: 15px;
    padding: 6px 35px;
    width: 100%;
    font-weight: bold;
    border-radius: 5px;
    border: none;
}

/* p{
    margin:5px;
} */
.price{
    font-weight: 700;
    font-size: large;
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
