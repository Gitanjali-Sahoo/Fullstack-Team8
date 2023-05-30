import { Facebook, Twitter, Apple, Google } from 'react-bootstrap-icons'

import styled from 'styled-components'

function Footer() {
    return (
        <Wrap>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-text">
                        <p>Contact Us</p>
                        <p>About Us</p>
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
    background-color: black;

    .footer-container {
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;

        /* bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        position: fixed;

        mix-blend-mode: lighten; */
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

    @media screen and (max-width: 768px) {
        .footer-content {
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
    @media screen and (min-width: 768px) {
        .footer-container {
            flex-direction: row;
        }

        .footer-content {
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        .footer-text {
            flex-direction: row;
            gap: 20px;
        }
    }
`
