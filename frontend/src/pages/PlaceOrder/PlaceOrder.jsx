import React from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/storeContext';

const PlaceOrder = () => {

  const {getTotalCartAmount} = React.useContext(StoreContext)


  return (
   <form className='place-order'>
   <div className="place-order-left">
    <p className='title'>Delivery Information</p>
    <div className="multi-fields">
      <input type="text" placeholder='First name' />
      <input type="text" placeholder='Last name' />

    </div>
     <input type="text" placeholder='Email address' />
     <input type="text" placeholder='Street'/>
     <div className="multi-fields">
      <input type="text" placeholder='City' />
      <input type="text" placeholder='State' />

    </div>
    <div className="multi-fields">
      <input type="text" placeholder='Zip code' />
      <input type="text" placeholder='Country' />

    </div>

     <input type="text" placeholder='Phone' />

   </div>
   <div className="place-order-right">

   <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}Rs</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount() === 0?0:20}Rs</p>

            </div>
            <hr />
            <div className="cart-total-details">
               <b>Total</b>
               <b>{getTotalCartAmount() === 0?0:getTotalCartAmount()+20}Rs</b>
            </div>
            </div>
            <button>PROCEED TO PAYMENT</button>
        </div>
    


   </div>
   </form>
  )
}

export default PlaceOrder
