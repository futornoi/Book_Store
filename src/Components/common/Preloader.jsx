import React from 'react';
import image from '../../../src/assets/preloader.gif'


const Preloader  = () => {
   return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
         <img src={image} alt="Loading...."/>
      </div>
   )
}

export default Preloader;
