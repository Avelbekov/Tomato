import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {

 const {getTotalCartAmount} = useContext(StoreContext)


  return (
 <form className='place-order'>
  <div className="place-order-left">
     <p className="title">
     Yetkazib berish haqida ma'lumot</p>
     <div className="multi-fields">
      <input type="text" placeholder='Ismingiz' />
      <input type="text" placeholder='Familiyangiz' />
     </div>
     <input type="eamil" placeholder='Email adresingiz'/>
     <input type="text" placeholder='Kocha nomi'/>
     <div className="multi-fields">
      <input type="text" placeholder='Shahar nomi' />
      <input type="text" placeholder='Davlat nomi' />
     </div>
     <div className="multi-fields">
      <input type="text" placeholder='Pochta indeksi' />
      <input type="text" placeholder='Mamlakat' />
     </div>
     <input type="text" placeholder='Telefon raqamingiz' />
  </div>



  {/*  */}
  <div className="place-order-right">
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
  </div>
 </form>
  )
}

export default PlaceOrder
