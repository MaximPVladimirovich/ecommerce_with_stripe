import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import Products from './components/Products'
import PaymentPage from './components/PaymentPage'

function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/shop" element={<Shop />} >
            <Route path=":productId" element={<Products />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
