import styled from 'styled-components'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { Link } from 'react-router-dom'

function BillingAddres() {
    const [validated, setValidated] = useState(false)

    const handleSubmit = (event) => {
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }

        setValidated(true)
    }

    return (
        <StyledContainer>
            <h2>1. Shipping address</h2>
            <StyledForm
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
            >
                <Form.Group controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <StyledFormControl
                        required
                        type="text"
                        placeholder="First name"
                        defaultValue=" name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="validationCustomUsername">
                    <Form.Label>Username</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">
                            @
                        </InputGroup.Text>
                        <StyledFormControl
                            type="text"
                            placeholder="Username"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a username.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="validationCustom03">
                    <Form.Label>City</Form.Label>
                    <StyledFormControl
                        type="text"
                        placeholder="City"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="validationCustom04">
                    <Form.Label>State</Form.Label>
                    <StyledFormControl
                        type="text"
                        placeholder="State"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="validationCustom05">
                    <Form.Label>Zip</Form.Label>
                    <StyledFormControl type="text" placeholder="Zip" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Check
                        required
                        label="Save this information for next time"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    />
                </Form.Group>

                { /*<Button
                    style={{
                        backgroundColor: '#f8df00',
                        color: 'black',
                        border: 'none',
                        marginTop: '5px'
                    }}
                    type="submit"
                >
                    Submit form
                </Button> */}
            </StyledForm>

            <PaymentMethodContainer>
                <h2 style={{ textAlign: 'center' }}>2. Payment method</h2>

                <PaymentContainer>
                    <RadioLabel htmlFor="radio2" id="paycredit">
                        <input type="radio" name="radio2" value="1" />
                        Pay with Credit card
                        <i className="bi bi-credit-card"></i>
                    </RadioLabel>
                    <RadioWrapper>
                        <form className="creditcard-form">
                            <div className="col-501">
                                <label htmlFor="cardnumber">Card number</label>
                                <FormInput
                                    type="number"
                                    id="cardnumber"
                                    name="cardnumber"
                                    placeholder="123 456 789 123"
                                    className="form-input"
                                />
                                <label htmlFor="cardname">Name on card</label>
                                <FormInput
                                    type="text"
                                    id="cardname"
                                    name="cardname"
                                    placeholder="John Doe"
                                    className="form-input"
                                />
                                <label htmlFor="expDate">Expiration date</label>
                                <FormInput
                                    type="text"
                                    id="expDate"
                                    name="expDate"
                                    placeholder="01/24"
                                    className="form-input"
                                />
                                <label htmlFor="securityNr">
                                    Security number
                                </label>
                                <FormInput
                                    type="number"
                                    onInput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                    maxLength="3"
                                    id="securityNr"
                                    name="securityNr"
                                    placeholder="000"
                                    className="form-input"
                                />
                            </div>
                        </form>
                    </RadioWrapper>

                    <RadioWrapper>
                        <RadioLabel htmlFor="radio2">
                            <input type="radio" name="radio2" value="2" />{' '}
                            PayPal
                            <i id="paypalIcon" className="bi bi-paypal"></i>
                            {/* <span className="radio-text">
                You will be directed to the PayPal website after
                submitting your order
              </span> */}
                        </RadioLabel>
                    </RadioWrapper>
                </PaymentContainer>
                <Link to="/confirmationpage">
                    <Button
                        style={{
                            backgroundColor: '#f8df00',
                            color: 'black',
                            border: 'none',
                            marginTop: '5px'
                        }}
                        type="submit"
                    >
                        Continue to payment
                    </Button>
                </Link>
            </PaymentMethodContainer>
        </StyledContainer>
    )
}

export default BillingAddres

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

     margin-bottom:60px;

`

const StyledForm = styled(Form)`
    width: 100%;
    max-width: 500px;
    border: none;
    margin-bottom: 20px;
`

const StyledFormControl = styled(Form.Control)`
    width: 100%;
`

const FormInput = styled.input`
    margin-left: 5px;
    width: 100%;
`

const PaymentMethodContainer = styled.div`
    margin-top: 20px;
    padding-bottom: 100px;
`

const PaymentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom:20px;
`

const RadioWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    width: 500px;
    .form-input {
        background-color: white;
        padding: 0.375rem 0.75rem;
        border: 1px solid #ced4da;
        appearance: none;
        border-radius: 0.375rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
    }
`

const RadioLabel = styled.label`
    display: flex;
    align-items: center;
    margin-left: 5px;
`
