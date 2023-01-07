import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import PaymentSuccessful from './PaymentSuccess';
import axios from 'axios';

const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: "#495057",
            fontFamily: "inherit",
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#6c757d",
            },
        },
        invalid: {
            color: "#dc3545",
            iconColor: "#dc3545",
        },
    },
};

function PaymentPage() {
    const { cartTotal, cart } = useSelector((state) => state.cart);

    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    async function handleSubmit(e) {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })

        if (!error && cartTotal !== 0) {
            try {
                const { id } = paymentMethod;
                // Axois post to localhost /payment route.
                const response = await axios.post('http://localhost:3000/payment', {
                    amount: cartTotal * 100,
                    id,
                })

                if (response.data.success) {
                    console.log("Successful Payment")
                    // dispatch(clearCart())
                    setSuccess(true)
                }

            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }

    return (
        <div>
            {
                cart.length === 0 ?
                    <div>
                        <h1>Cart is empty</h1>
                    </div>
                    :
                    !success ?
                        <div className='payment-div'>
                            <Card
                                sx={{ maxWidth: 500 }}
                                className='payment-card'
                            >
                                <CardContent>
                                    <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                                        Complete Payment
                                    </Typography>
                                    <br />
                                    <CardElement options={CARD_ELEMENT_OPTIONS} />
                                </CardContent>
                                <CardActions>
                                    <Button
                                        variant="contained"
                                        className='pay-button'
                                        onClick={(e) => handleSubmit(e)}
                                    >
                                        Pay
                                    </Button>
                                </CardActions>
                            </Card>
                            <div className='pay-credentials'>
                                <Typography>
                                    <span className='card-number'>*Test card number: </span>  4242 4242 4242 4242
                                </Typography>
                                <Typography>
                                    *The other card details (expiry date, CVC, and ZIP) can be random.
                                </Typography>
                            </div>
                        </div>
                        :
                        <PaymentSuccessful />
            }
        </div>
    );
}

export default PaymentPage;