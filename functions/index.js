const functions = require('firebase-functions');

const express = require('express');
const cors = require('cors');
const { request, response } = require('express');
const stripe = require('stripe')
('sk_test_51HQSx7AdDit1b9OBvumLLtdNXYAhMwNjJ0XeiPSLGT0kKi341k6aQMT1XalZOtHC68MlQ3dGIG3xWXOSHkSfqAtC00wrWTz6r5')


// API

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send("Hello world"))

app.post('/payments/create', async(request, response) => {
    const total = request.query.total;

    console.log('Payment Request recieved BOOM!!! for this amount>>>', total)

    const paymentIntent = await stripe.paymentIntent.create({
        amount: total, // subunits for currency
        currency: 'usd', 
    })

    // Ok created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})
// listen command
exports.api = functions.https.onRequest(app)


// http://localhost:5001/challenge-b23d1/us-central1/api