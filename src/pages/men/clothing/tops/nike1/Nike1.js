
    import React from 'react';
    import { NavBar, ProductOverview, ProductRecommendation, Footer } from '../../../../../components';

    // ONLY CHANGE INPUT.JS
    import input from './input';

    // DO NOT TOUCH WEBDESIGN LAYOUT
    const Nike1 = () => {
        return (
            <div className='bg-white'>
             
            <ProductOverview product={input.product} reviews={input.reviews}/>
            <ProductRecommendation recommendation={input.recommendation}/>
              
            </div>
        )
    }

    export default Nike1
    
