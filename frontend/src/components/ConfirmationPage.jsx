import styled from 'styled-components'
import { CheckCircle } from 'react-bootstrap-icons'

function ConfirmationPage() {
    return (
        <Wrap>
            <div className="checkIcon">
                {/* <i className="bi bi-check2-circle" width="32" height="32"></i> */}

                <CheckCircle />
            </div>
            <h1>Thank you for your order!</h1>
            <p className="confirm-text">Order number: #93274901</p>
            <p className="confirm-text" id="emailtext">
                Your order is now on its way. An order confirmation has been
                sent to your email.
            </p>
            <div className="order-img-container">
                <img
                    className="order-img"
                    src="./src/images/confirrm.png"
                    alt="Image of delivery person"
                />
            </div>
        </Wrap>
    )
}

export default ConfirmationPage

const Wrap = styled.div`
    .checkIcon {
        text-align: center;
        font-size: 4rem;
    }
    h1 {
        font-family: italiana;
        text-align: center;
        margin-top: 5%;
        margin-bottom: 3%;
    }
    .confirm-text {
        text-align: center;
        padding: 0.3rem;
    }
    #emailtext {
        margin-bottom: 5%;
    }
    .order-img-container {
        display: flex;
        justify-content: center;
    }
    .order-img {
        display: flex;
        width: 100%;
        height: 500px;
        border-radius: 50%;
    }
    @media screen and (min-width: 1000px) {
        .order-img {
            width: 60%;
        }
    }
`
