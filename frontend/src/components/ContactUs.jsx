import { useState } from "react"
// import {useEffect} from 'react'
import styled from 'styled-components'
import axios from "axios"


export const ContactUs = () => {


  const [data, setData] = useState({name:'', email:'', message:'' });
    const handleChange = (e) =>{
    const name = e.target.name
    const value = e.target.value
    setData({...data, [name]:value})
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data)
    axios.post("http://localhost:3000/userInfo", data)
      .then(() => {
        console.log("successful");
        setData({});
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <DIV>
    <div className="container-aboutUs">
 <h3>Contact Us</h3>
        <form method="post" onSubmit={handleSubmit} >

            <div >
        <div>
            <label htmlFor="name">Name:</label><br></br>
            <input id="name" type="text" name="name"  onChange={handleChange} value={data.name}></input>
        </div>

        <div>
            <label htmlFor="email" >E-Mail:</label><br></br>
            <input id="email" type="email" name="email"  onChange={handleChange} value={data.email}></input>
        </div>
</div>
        <div>
            <label htmlFor="message">Message:</label><br></br>
            <textarea id="message" type="text" name="message" onChange={handleChange} value={data.message}></textarea>
        </div>

        <button type="submit" className="button">Send</button>
{/* <p>{data.name}<br></br>{data.email}<br></br>{data.message}</p> */}
</form>
       </div>
       </DIV>
  )
}
export default ContactUs;

const DIV = styled.div`

.container-aboutUs{
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
    justify-content: center;
    /* margin-top: 100px; */
    height: 80vh;
}

form{
width: 400px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 1px 3px 5px 1px #d3cc93;
  /* background-color: rgba(252, 248, 248, 0.2); */
  margin: 40px;

}
.button{
    /* box-shadow: 1px 3px 5px  rgb(155, 5, 5); */
    border-radius: 20px;
    /* width: 150px; */
    background-color: #F8DF00;
    color: black;
    font-weight: 500;
    width: 100px;
    box-shadow: 1px 3px 5px  #70706e;

}


input, textarea{
    /* box-shadow: 1px 3px 5px  yellow; */
    width: 100%;
    margin: 15px auto;
}
@media (max-width:400px){
    form{
width: 250px;
}
}
`
