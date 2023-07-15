
    import React from 'react';
    import { NavBar, ProductCategory, Footer } from '../../../../components';

    // ONLY CHANGE INPUT.JS
    import input from './input';

    const Belts = () => {
        return (
            <div className="bg-white">
             
            <ProductCategory
                name={input.name}
                sortOptions={input.sortOptions}
                subCategories={input.subCategories}
                filters={input.filters}
                products={input.products} />
            <Footer />
            </div>
        )
    }

    export default Belts
    
