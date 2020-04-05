import React from 'react';
import Navbar from './Menu';
import Footer from './Footer';

const Stickers = () => {
  return (
    // render stickers here
    <>
      <div id='page-container'>
        <Navbar />
        <div id="content-wrap">
          stickers</div>
        <Footer id='footer' />
      </div>
    </>
  )
}

export default Stickers;