import React, { useState } from 'react';
import { Banner, Brands, Footer, Header, NavBar, Previews } from '../../components';
import Carousel from '../../components/landing-page/carousel/carousel';

const Home = () => {
  // Toggle between banner states
  const[toggleBanner, setToggleBanner] = useState(true);

  return (
    <div className='landing-page'>
        {/*Universal skeleton layout for the entire webpage*/}
        {/* <Banner trigger={toggleBanner} setTrigger={setToggleBanner}/> */}
         
        <Carousel/>
        <Header />
        <Previews />
        {/* <Brands /> */}
          
    </div>
  )
}

export default Home