import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';

import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    
    {/* newletter box - sub - never miss - enter email - button */}

    <FooterOverlay />
    <Newsletter />

    {/* footer part */}

    <div className="app__footer-links"> 
    {/* it will be in 3 dif divs - contacts - logo - work*/}

      {/* address */}
      <div className="app__footer-links_contact"> 
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>

      
      {/* social media */}
      <div className="app__footer-links_logo"> 
        <img src={images.gericht} alt="footer_logo"/>
        <p className="p__opensans">"The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others."</p>
        <img src={images.spoon} alt="spoon" className="spoon__img" style={{marginTop: 15}}/>
        {/* the 3 social media icons*/}
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      
      {/* working hours */}
      <div className="app__footer-links_work"> 
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 Am - 12:00 Am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 Am - 11:00 Pm</p>
      </div>

    </div>


    {/*trade mark*/}
    <div className="footer__copyright">
      <p className="p__opensans">2021 Gericht. All Rights Reserved.</p>
    </div>


  </div>
);

export default Footer;
