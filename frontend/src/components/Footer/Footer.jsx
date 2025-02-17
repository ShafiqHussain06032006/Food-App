import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'


const Footer = () => {
  return (
    <div className="footer" id='footer'>
    <div className="footer-content">
    <div className="footer-content-left">
            <img src={assets.logo1} alt="" className='logo1' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quisquam quos cupiditate ad molestiae similique numquam obcaecati aliquam natus perspiciatis earum rerum laboriosam deserunt fugit ullam aspernatur voluptates, praesentium repellat!</p>
      
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>

    </div>
    <div className="footer-content-center">
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
              </ul>

            
    </div>

    <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+92-305-9013378</li>
                <li>contact@giki.edu.pk</li>
              </ul>
    </div>
    </div>
        <hr />
        <p className="footer-copyright">Copyright 2025 GIKI. All rights reserved.</p>
</div>
  )
}

export default Footer