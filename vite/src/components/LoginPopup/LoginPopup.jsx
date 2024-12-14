import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

   
    const [currState,setCurrState] = useState("Login")



  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type="text" placeholder='Sizning ismingiz' required />}
            
            <input type="email" placeholder='Sizning emailingiz' required />
            <input type="password" placeholder='Parol' required />
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            
        </div>
        {currState==="Login"
        ?<p>Yangi hisob yaratilsinmi? <span onClick={()=>setCurrState("Sign Up")}>bu yerni bosing</span></p>
        :<p>Hisobingiz bormi?<span onClick={()=>setCurrState("Login")}>Bu yerda kiring</span></p>
        }
        
        
      </form>
    </div>
  )
}

export default LoginPopup
