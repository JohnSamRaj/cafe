import React from 'react'

import './FooterOverlay.css'; 
// In My Piont Of View In This Footer If we Command Line The Import component Of Css Means We Can Get Better Output Than This

const FooterOverlay = () => {
  return (
    <div className='app__footerOverlay'>
      <div className='app__footerOverlay-black' />
      <div className='app__footerOverlay-img app__bg' />
    </div>
  )
}

export default FooterOverlay
