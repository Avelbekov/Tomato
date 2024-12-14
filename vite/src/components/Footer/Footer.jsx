import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
             <img src={assets.logo} alt="" />
          <br /><br />
                 <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                 </div>
        </div>
        <div className="footer-content-right">
           <h2>Kompaniya</h2>
           <ul>
            <li>Uy</li>
            <li>Biz haqimizda</li>
            <li>Yetkazib berish</li>
            <li>Maxfiylik siyosati</li>
           </ul>
        </div>
        <div className="footer-content-center">
               <h2>
               BOG'LANING</h2>
               <ul>
                <li>+998959910608</li>
                <li>contact@tomato.com</li>
               </ul>
        </div>
      </div>
      <hr />
      
    </div>
  )
}

export default Footer
