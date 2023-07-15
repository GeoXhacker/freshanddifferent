
    import React from 'react';
    import { NavBar, ProductOverview, ProductRecommendation, Footer } from '../../../../../components';

    // ONLY CHANGE INPUT.JS
    import input from './input';

    // DO NOT TOUCH WEBDESIGN LAYOUT
    const TommyJohn3 = () => {
        return (
            <div className='bg-white'>
             
            <ProductOverview product={input.product} reviews={input.reviews}/>
            <ProductRecommendation recommendation={input.recommendation}/>
            <Footer />
            </div>
        )
    }

    export default TommyJohn3
    
