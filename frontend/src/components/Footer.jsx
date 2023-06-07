import { Link } from 'react-router-dom'

import { Facebook, Twitter, Apple, Google } from 'react-bootstrap-icons'
import styled from 'styled-components'

function Footer() {
    return (
        <Wrap>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-text">
                        <Link to="/contactUs" className="link">
                            <p>Contact Us</p>
                        </Link>
                        <Link to="/aboutUs" className="link">
                            {' '}
                            <p>About Us</p>
                        </Link>
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
                        <Google />
                    </div>
                </div>
            </div>
        </Wrap>
    )
}

export default Footer

// Using styled components
const Wrap = styled.div`
    .footer-container {
        background-color: black;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        padding: 20px;
        position: fixed; /* Change position to fixed */
        bottom: 0; /* Position the footer at the bottom */
        left: 0;
        right: 0;
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

    .link {
        text-decoration: none;
    }


    @media screen and (max-width: 768px) {
        .footer-content {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: fixed;

            margin-bottom: 210px;
            margin-top: 150px;
            padding-bottom: 100px;
        }
        .footer-text {
            gap: 0px;
            flex-direction: column;
        }
        .footer-copyright {
            text-align: center;
        }
    }
`
