import React from 'react';
import { Link} from 'react-router-dom';
import "../../Style/Basket.scss"
import { BiHeart, BiLockAlt } from 'react-icons/bi';
import { RiPencilLine } from 'react-icons/ri';
import { FiLock, FiTrash2 } from 'react-icons/fi';
import paypal from '../../Images/PP_BTN.png';
export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div className="container basket">
      <h2>Your Shopping Bag</h2>
      <hr />
      <div className="aem-Grid aem-Grid--12">
        {cartItems.length === 0 && <div>Cart is empty</div>}
        <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
          {cartItems.map((item) => (
            <div key={item.id} className="aem-Grid aem-Grid--12">
              <div className="aem-GridColumn aem-GridColumn--default--6  aem-GridColumn--phone--12 productimage">
                <div className="product">
                  <div>
                    <img src={item.image} height="180px" width="160px" />
                  </div>
                  <div className='basket-left'>
                    <h5>{item.title.substring(0, 18)}</h5>
                    <h6>Size : Medium</h6>
                    <h6>Color : Storm</h6>
                    <h6>${item.price}</h6>
                  </div>
                </div>
              </div>
              <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 increasebutton">
                <div class="input-group w-auto align-items-center">
                  <input
                    type="button"
                    value="-"
                    class="button-minus border rounded-circle"
                    data-field="quantity"
                    onClick={() => onRemove(item)}
                  />&nbsp;&nbsp;
                  <h6 className="quant">{item.qty}</h6>&nbsp;&nbsp;
                  <input
                    type="button"
                    value="+"
                    class="button-plus border rounded-circle"
                    data-field="quantity"
                    onClick={() => onAdd(item)}
                  />
                </div>
              </div>

              <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 icon">
                <p><RiPencilLine size={18} /> Edit item</p>
                <p><FiTrash2 size={18} /> Remove&nbsp;</p>
                <p><BiHeart size={18} /> Save&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              </div>

            </div>
          ))}
        </div>

        <br />
        <br />
        <div className="aem-GridColumn aem-GridColumn--default--4  aem-GridColumn--phone--12 cartdetails">
          {cartItems.length !== 0 && (
            <>
              <h5>Pricing Summary</h5>
              <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--6 ">
                  <div className='basket-t'>
                    <h6>Subtotal</h6>
                    <h6>Coupon</h6>
                    <h6>Gift Card</h6>
                    <h6>Estimated tax</h6>
                    <h6>Estimated shipping</h6>
                    <h6><strong>Estimated Total</strong></h6>
                  </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--6 text-right">
                  <div className='basket-1'>
                    <h6>${itemsPrice.toFixed(2)}</h6>
                    <h6>${taxPrice.toFixed(2)}</h6>
                    <h6>${shippingPrice.toFixed(2)}</h6>
                    <h6>${shippingPrice.toFixed(2)}</h6>
                    <h6>${shippingPrice.toFixed(2)}</h6>
                    <h6><strong>${totalPrice.toFixed(2)}</strong></h6>
                  </div>
                </div>
              </div>
              <div className="buttonsone">
                <div>
                  <button

                    className="check"
                  >
                    <FiLock size={18} />&nbsp;&nbsp;<Link to="/Checkout1"><p>CHECKOUT</p></Link>
                  </button>
                </div>
                <div>
                  <button className="paypal"><img src={paypal} alt="Submit" /></button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
