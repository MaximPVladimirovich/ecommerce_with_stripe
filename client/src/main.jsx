import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import store from './store'
import { Provider } from 'react-redux'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISH_KEY);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <Provider store={store}>
        <App />
      </Provider>
    </Elements>
  </React.StrictMode>,
)
