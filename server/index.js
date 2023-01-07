// Setup express server.
const express = require('express');
const app = express();
const dotenv = require('dotenv');

// Setup dotenv.
dotenv.config();

// Add api key to stripe.
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Setup body-parser.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setup cors.
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello Stripe');
});

app.post('/payment', async (req, res) => {
    let { amount, id } = req.body;
    const customer = await stripe.customers.create();

    const payment = await stripe.paymentIntents.create({
        amount,
        currency: "USD",
        description: "Purchase from My Shop",
        payment_method: id,
        confirm: true,
        customer: customer.id,
    })

    console.log(payment);

    res.json({
        message: "Payment Successful",
        success: true
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
