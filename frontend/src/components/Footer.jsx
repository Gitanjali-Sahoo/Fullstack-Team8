import { Facebook, Twitter, Apple } from 'react-bootstrap-icons'
import styled from 'styled-components'
// import {Link} from 'react-router-dom'
import {Link, Route, Routes} from 'react-router-dom'
import  ContactUs  from './ContactUs'
import AboutUs from './AboutUs'



function Footer() {
    return (
        <Wrap>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-text">
                       <Link to="/contactUs"  className='link'><p>Contact Us</p></Link>
                       <Link to="/aboutUs" className='link'> <p>About Us</p></Link>
                    </div>
                    <div className="footer-copyright">
                        <p>
                            Copyright &copy; 2023 by Urban | All Rights
                            Reserved.
                        </p>
                    </div>
                    <div className="footer-icon">
                        <Facebook />
                        <Twitter />
                        <Apple />
                    </div>
                </div>
            </div>
            <Routes>
            <Route path="/contactUs" element={< ContactUs />}> </Route>
            <Route path="/aboutUs" element={< AboutUs />}></Route>
            </Routes>
         </Wrap>
    )
}

export default Footer

// Using styled components
const Wrap = styled.div`
    background-color: black;


    .footer-container {
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        padding: 20px;
        margin-top: 41%;
    }

    .footer-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        mix-blend-mode: lighten;
    }

    .footer-text {
        display: flex;
        gap: 20px;
    }

    .footer-icon {
        display: flex;
        gap: 20px;
    }
    .link{
        text-decoration: none;
    }
    @media screen and (max-width: 900px) {
        .footer-content {

            margin-top: 70%;
        }}
    @media screen and (max-width: 768px) {
        .footer-content {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 50%;
        }
        .footer-text {
            margin-bottom: 20px;
            flex-direction: column;
        }
        .footer-copyright {
            text-align: center;
        }
    }
`
