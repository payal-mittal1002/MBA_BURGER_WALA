import React from 'react'

const OrderDetails = () => {
  return (
   <section className='OrderDetails'>
    <main>
        <h1>Order Deatils</h1>
        <div>
            <h1>Shipping</h1>
        
            <p>
                <b>Address</b>
                {"hfknhjk"}
            </p>
        </div>



        <div>
            <h1>Contact</h1>
            <p>
                <b>Name</b>
                {"Payal"}
            </p>
            <p>
                <b>Phone No.</b>
                {6789765432}
            </p>
        </div>



        <div>
            <h1>Status</h1>
            <p>
                <b>Order Status</b>
                {"Processing"}
            </p>
            <p>
                <b>Placed At</b>
                {"23-02-342"}
            </p>
            <p>
                <b>Delivered At</b>
                {"23-02-343"}
            </p>
        </div>


        <div>
            <h1>Payment</h1>
            <p>
                <b>Payment Method</b>
                {"Online"}
            </p>
            <p>
                <b>payment Reference</b>
                #{687654}
            </p>
            <p>
                <b>Paid At</b>
                {"23-02-343"}
            </p>
        </div>


        <div>
            <h1>Amount</h1>
            <p>
                <b>Total Items</b>
                ₹{8765}
            </p>
            <p>
                <b>Shipping Charges</b>
                ₹{200}
            </p>
            <p>
                <b>Tax Charges</b>
                ₹{87}
            </p>
            <p>
                <b>Total Amount</b>
                ₹{456}
            </p>
            
        </div>

        <article>
            <h1>Ordered Items</h1>
            <div>
            <h4>Cheese Burger</h4>
                  <div>
                <span>{12}</span> × <span>{232}</span>
                </div>
            </div>

            <div>
            <h4>Veg Cheese Burger</h4>
                  <div>
                <span>{12}</span> × <span>{500}</span>
                </div>
            </div>

            <div>
            <h4>Cheese Burger with French Fries</h4>
                  <div>
                <span>{12}</span> × <span>{1800}</span>
                </div>
            </div>
            <div>
                <h4 style={{fontWeight:800}}>Sub Total</h4>
                <div style={{fontWeight:800}}>₹{456}</div>
            </div>
        </article>
    </main>
   </section>
  )
}

export default OrderDetails