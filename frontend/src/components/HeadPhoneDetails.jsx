import axios from "axios";
import { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";



const HeadPhoneDetails = (id) => {
    const [headPhone, setheadPhones] = useState([]);
    // const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/headPhones/${id}`)
          .then(response => {
            setheadPhones(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, [id]);
  return (
    <div className='container'>
<div className='grid-container'>
        <div className='grid-item'>
            <img src={headPhone.image} />
          <div className='productsInfo'>
            <p>{headPhone.brand}</p>
</div>
        </div>

</div>
</div>

  )
}

export default HeadPhoneDetails
