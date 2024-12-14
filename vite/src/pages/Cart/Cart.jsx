import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);



  const navigate = useNavigate();




  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>
          Elementlar</p>
          <p>Sarlavha</p>
          <p>
          Narxi</p>
          <p>Miqdori</p>
          <p>Jami</p>
          <p>
          O'chirish</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>

            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>
          Savat jami</h2>
          <div>
            <div className="cart-total-details">
                  <p>
                  Oraliq jami</p>
                  <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
                  <p>Yetkazib berish</p>
                  <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
                    <b>Jami</b>
                    <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
            </div>
            <button onClick={()=>navigate('/order')} className=''>CHEKLASHGA DAVOM ETILGAN</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>
            Agar sizda promo-kod bo'lsa, uni shu yerga kiriting</p>
            <div className='cart-promocode-input'>
            <input type="text" placeholder='kupon kodi' />
            <button>
            Yuborish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
