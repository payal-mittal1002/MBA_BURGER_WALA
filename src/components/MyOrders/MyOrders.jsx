import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineEye} from 'react-icons/ai'
const MyOrders = () => {
  const arr=[1,2,3,4];
  return (
    <section className='tableClass'>
      <main>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Status</th>
              <th>Item QTY</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {arr.map((i)=>(
            <tr>
              <td>#8676432</td>
              <td>Processing</td>
              <td>45</td>
              <td>₹{67}</td>
              <td>online</td>
              <td><Link to={`/Order/${768654}`}><AiOutlineEye/></Link></td>
            </tr>
          ))}
          
          </tbody>
        </table>
      </main>
    </section>
  )
}

export default MyOrders