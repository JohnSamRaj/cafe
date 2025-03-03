import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';

import './Footer.css';

const Footer = () => (
  <div className='app__footer app__bg section__padding'> {/* app__bg Is My Change */}
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>Sattee Pattee, Namakkal, Tamil Nadu</p>
        <p className='p__opensans'>+91 1000000001</p>
        <p className='p__opensans'>+91 1000000001</p>
      </div>

      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='footer_logo' />
        <p className='p__opensans'>"The Best Way To Find Ourself Is To Loss Yourslef In The Service Of Others."</p>
        <img src={images.spoon} alt='footer_spoon' className='spoon__img' style={{marginTop : 15}} />
        <div className='app__footer-links_icons'>
          <FiFacebook  />
          <FiTwitter  />
          <FiInstagram  />
        </div>
      </div>

      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday - Friday</p>
        <p className='p__opensans'>08:00 AM - 12:00 AM</p>
        <p className='p__opensans'>Saturday - Sunday</p>
        <p className='p__opensans'>07:00 AM - 11:00 Pm</p>
      </div>

    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2024 Gericht. All Rights Reserved</p>
    </div>

  </div>
);

export default Footer;
