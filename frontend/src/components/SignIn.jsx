/*
import styled from 'styled-components'
import { Facebook, Twitter, Apple, Google } from 'react-bootstrap-icons'
import { useState } from 'react'
import SignUp from './SignUp'

function SignIn() {
    // show sign up form when " Sign up is clicked"
    const [showForm, setShowForm] = useState(false)
    // Hide sign in  form and show only sign up when " sign up " is clciked
    const [hideForm, sethideForm] = useState(true)
    //Change "sign in" , "sign up" text color when its clicked
    // It indicates to the user that they are in the right form
    const [changeColor, setChangeColor] = useState(true)

    const handleShow = () => {
        setShowForm(true)
        sethideForm(false)
        setChangeColor(false)
    }

    const twitterRedirect = () => {
        window.location.href = 'https://twitter.com/'
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
        <Wrap className="wrap" id="wrap" >
            {hideForm && (
                <div className="form-container" id="form-container">
                    <div className="form-sign" id="form-sign">
                        <div>
                            <h4
                                onClick={handleShow}
                                style={{
                                    color: changeColor ? '#f8df00' : 'white'
                                }}
                            >
                                Sign in
                            </h4>
                            <hr />
                        </div>
                        <div>
                            <h4
                                onClick={handleShow}
                                style={{
                                    color: changeColor ? 'white' : '#f8df00'
                                }}
                            >
                                Sign up
                            </h4>
                            <hr />
                        </div>
                    </div>

                    <div className="icons" id="icons">
                        <Facebook onClick={facebookRedirect} />
                        <Twitter onClick={twitterRedirect} />
                        <Apple onClick={appleRedirect} />
                        <Google onClick={googleRedirect} />
                    </div>

                        <h4 onClick={handleShow}  style={{ color: changeColor ?  'white': '#f8df00' }} >Sign up</h4>
                        <hr />

                        <p>Forgot password?</p>
                    </div>

                    <p>New to Uber? Sign up</p>
                    <button type="submit" className="form-submit" id="btn" >
                        Sign in
                    </button>
                </div>
            )}
            {showForm && <SignUp />}
        </Wrap>
    )
}

export default SignIn

const Wrap = styled.div`
    .form-sign {
        display: flex;
        justify-content: center;
        column-gap: 20px;
        text-align: center;
        cursor: pointer;
    }

    .form-container {
        display: flex;
        flex-direction: column;
        justify-content: center;

        align-items: center;
        margin-top: 5%;

        width: 500px;
        margin-left: 34%;
    }

    .form {
        display: flex;
        flex-direction: column;
        left: 50%;
        width: 500px;
        row-gap: 20px;
        margin-bottom: 30px;
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

    .icons {
        display: flex;
        column-gap: 50px;
        margin-top: 20px;
        margin-bottom: 20px;

        cursor: pointer;
    }
`
*/

import styled from 'styled-components'
import { Facebook, Twitter, Apple, Google } from 'react-bootstrap-icons'
import { useState } from 'react'
import SignUp from './SignUp'
import axios from 'axios'

function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        // Send request to backend
        axios
            .post('http://localhost:3000/signin', { email, password })

            .then((response) => {
                // Handle response from the server
                if (response.data.success) {
                    // Sign-in successful
                    alert('Sign-in successful')
                    setEmail('') // Clear the email input field
                    setPassword('') // Clear the password input field
                } else {
                    // Sign-in failed
                    alert('Sign-in failed: ' + response.data.error)
                }
            })
            .catch((error) => {
                console.error('Error:', error)
                alert('An error occurred during sign-in')
            })
    }
    // show sign up form when " Sign up is clicked"
    const [showForm, setShowForm] = useState(false)
    // Hide sign in  form and show only sign up when " sign up " is clciked
    const [hideForm, sethideForm] = useState(true)
    //Change "sign in" , "sign up" text color when its clicked
    // It indicates to the user that they are in the right form
    const [changeColor, setChangeColor] = useState(true)

    const handleShow = () => {
        setShowForm(true)
        sethideForm(false)
        setChangeColor(false)
    }

    const twitterRedirect = () => {
        window.location.href = 'https://twitter.com/'
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
        <Wrap className="wrap" id="wrap">
            {hideForm && (
                <div className="form-container" id="form-container">
                    <div className="form-sign" id="form-sign">
                        <div>
                            <h4
                                onClick={handleShow}
                                style={{
                                    color: changeColor ? '#f8df00' : 'white'
                                }}
                            >
                                Sign in
                            </h4>
                            <hr />
                        </div>
                        <div>
                            <h4
                                onClick={handleShow}
                                style={{
                                    color: changeColor ? 'white' : '#f8df00'
                                }}
                            >
                                Sign up
                            </h4>
                            <hr />
                        </div>
                    </div>

                    <div className="icons" id="icons">
                        <Facebook onClick={facebookRedirect} />
                        <Twitter onClick={twitterRedirect} />
                        <Apple onClick={appleRedirect} />
                        <Google onClick={googleRedirect} />
                    </div>
                    <form onSubmit={handleSubmit} className="form" id="form">
                        <label> Email </label>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label>Password </label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <p>Forgot password?</p>
                        <button type="submit" className="form-submit" id="btn">
                            Sign In
                        </button>
                    </form>
                </div>
            )}
            {showForm && <SignUp />}
        </Wrap>
    )
}

export default SignIn

const Wrap = styled.div`

.form-sign {
    display: flex;
    justify-content: center;
    column-gap: 20px;
    text-align: center;
    cursor: pointer;
}

    .form-container {
        display: flex;
        flex-direction: column;
        justify-content: center;

    align-items: center;



    width: 500px;
    margin-left: 34%;
       margin-top:100px;

}

.form {
    display: flex;
    flex-direction: column;
    left: 50%;
    width: 500px;
    row-gap: 20px;
     margin-bottom:30px;



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

    .form-submit {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto; /* Center horizontally */
    }

    .icons {
        display: flex;
        column-gap: 50px;
        margin-top: 20px;
        margin-bottom: 20px;

        cursor: pointer;
    }

    @media (max-width: 576px) {
        .form-container {
            margin-top: 10%;
        }
    }

    @media (max-width: 480px) {
        .form-container {
            padding: 0 10px;
        }

        .form-sign hr {
            max-width: 180px;
        }
    }
`
