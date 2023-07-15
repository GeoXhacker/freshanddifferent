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
        <NavBar />
        <Carousel/>
        <Header />
        <Previews />
        {/* <Brands /> */}
        <Footer />
    </div>
  )
}

export default Home