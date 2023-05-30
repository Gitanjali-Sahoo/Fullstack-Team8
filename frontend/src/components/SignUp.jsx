import styled from 'styled-components'
import { useState } from 'react'
import { Facebook, Twitter, Apple,Google} from 'react-bootstrap-icons'

import SignIn from './SignIn'


function SignUp() {

 // show sign up form when " Sign up is clicked"
    const [showForm, setShowForm] = useState(true)
    // Hide sign in  form and show only sign up when " sign up " is clciked
    const [hideForm, sethideForm] = useState(false)
     //Change "sign in" , "sign up" text color when its clicked
// It indicates to the user that they are in the right form
    const [changeColor, setChangeColor] = useState(true);


    const handleShow = () => {
        setShowForm(false)
        sethideForm(true)
        setChangeColor(false)



    }

// Event to redirect user to different links
    const twitterRedirect = () =>
    {
        window.location.href = 'https://twitter.com/';
}


    const facebookRedirect = () => {
        window.location.href = 'https://www.facebook.com/'
    }

    const appleRedirect = () => {
        window.location.href = 'https://www.apple.com/'
    }

    const googleRedirect = () => {
        window.location.href = 'https://www.google.com/'

    }

    return (

      <Wrap className='wrap' id='wrap'>


{showForm && (
            <div className='form-container' id='form-container'>


                <div className="form-sign" id='form-sign'>

              <div >
                   <h4 onClick={handleShow}   style={{ color: changeColor ?  'white': '#f8df00' }} >Sign in</h4>
              <hr />

              </div>
              <div>
                   <h4 onClick={handleShow} style={{ color: changeColor? '#f8df00' :'white'  }}>Sign up</h4>
              <hr />

              </div>


                </div>
                <div className='icons'id='icons'>
                    <Facebook onClick={facebookRedirect} />
                    <Twitter onClick={twitterRedirect } />
                    <Apple onClick={appleRedirect} />
                    <Google onClick={googleRedirect } />
                </div>
                <div>

</div>
                <div className='form' id='form'>
                    <label >Name </label>
                    <input type="text" placeholder='Example' />
                    <label > Email </label>

                    <input type="text" placeholder=' example@gmail.com' />
                     <label >Password </label>
                    <input type="text" placeholder='***********' />

                </div>

                <button type='submit' className='form-submit' id='form-submit'>Sign up</button>




            </div> )}
              {hideForm &&<SignIn/>}
              </Wrap>
  )
}

export default SignUp;

const Wrap = styled.div`
.form-sign {
    display: flex;
    justify-content: center;
    column-gap: 20px;
    text-align: center;
}

.form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: center;


    width: 500px; margin-left: 34%;
}

.form {
    display: flex;
    flex-direction: column;
    left: 50%;
    width: 500px;
    row-gap: 20px;
    margin-bottom:50px;
}

.form input {
    border: #ffffff 1px solid;
    border-top: none;
    border-right: none;
    border-left: none;
    color: white;
}
.form-sign hr {
    color: rgb(255, 255, 255);
    width: 240px;
}

.form-container .form-submit {
    background-color: #f8df00;
    color: #000000;
    width: 110px;
    height: 40px;
    border-radius: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: larger;
    font-weight: 700;
    text-align: center;
    border: none;

}

.icons{
    display:flex;
    column-gap:50px;
    margin-top:20px;
    margin-bottom:20px;
     cursor: pointer;
}

`
