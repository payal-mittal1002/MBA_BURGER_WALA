import React from 'react'
import {Link} from "react-router-dom"
const PaymentSuccess = () => {
  return (
    <section className='PaymentSuccess'>
        <main>
            <h1>Order Confirmed</h1>
            <p>Order Placed SuccessFully,You can check order status below</p>
            <Link to='/MyOrders'>Check Status</Link>
        </main>
    </section>
  )
}

export default PaymentSuccess