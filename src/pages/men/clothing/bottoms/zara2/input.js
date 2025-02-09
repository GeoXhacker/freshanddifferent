
    // TEXT input for "ProductOverview"
    const input = {
    // Product REVIEWS
    reviews: {
        href: 'https://www.google.com/',
        average: 4,
        totalCount: 117
    },

    // Product DESCRIPTIONS
    product: {
        // General Information about the product
        name: 'Cropped Cargo Pants',
        price: '$60',
        to: '/luna-demomen/clothing/zara2/Zara2',
        
        // Product Breadcrumbs
        breadcrumbs: [
            { id: 1, name: 'Men', to: '/men' },
            { id: 2, name: 'Clothing', to:'/men/clothing'},
            { id: 3, name: 'Bottoms', to: '/men/clothing/bottoms' },
        ],

        //Product Images
        images: [
            {
            src: 'https://static.zara.net/photos///2023/V/0/2/p/0600/401/821/2/w/1126/0600401821_2_1_1.jpg?ts=1686126729500',
            alt: 'image 1',
            },
            {
            src: 'https://static.zara.net/photos///2023/V/0/2/p/0600/401/821/2/w/1126/0600401821_1_1_1.jpg?ts=1686126729395',
            alt: 'image 2',
            },
            {
            src: 'https://static.zara.net/photos///2023/V/0/2/p/0600/401/821/2/w/1126/0600401821_2_2_1.jpg?ts=1686126729400',
            alt: 'image 3',
            },
            {
            src: 'https://static.zara.net/photos///2023/V/0/2/p/0600/401/821/2/w/1126/0600401821_6_1_1.jpg?ts=1686036914169',
            alt: 'image 4',
            },
        ],

        // Product Colors
        colors: [
            { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
            { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
            { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
        ],

        // Product Sizing
        sizes: [
            { name: 'XS', inStock: false },
            { name: 'S', inStock: true },
            { name: 'M', inStock: true },
            { name: 'L', inStock: true },
            { name: 'XL', inStock: true },
            { name: 'XXL', inStock: false },
        ],

        // Product Introduction
        description:
            'Slim fit pants with front pockets and back welt pockets. Flap patch pockets at legs. Front zip and button closure.',
        
        // Product Bulletpoints
        highlights: [
            'Machine wash max',
            'Do not dry clean',
            'Low temperature dryer may be used',
            '98% cotton',
            '2% elastane',
        ],
        
        // Product Additional Information
        details:
            'To lengthen the life of your denim garments, always wash them inside out in low temperatures. This way we help preserve the colors and structure of the fabric and reduce energy consumption.',
    },

    // Personalized Recommendation per Product
    recommendation: [
        {
            id: 1,
            name: 'Basic Tee',
            category: "Men's T-Shirts",
            href: '/error',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
        {
            id: 2,
            name: 'Basic Tee',
            category: "Men's T-Shirts",
            href: '/error',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
        {
            id: 3,
            name: 'Basic Tee',
            category: "Men's T-Shirts",
            href: '/error',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
        {
            id: 4,
            name: 'Basic Tee',
            category: "Men's T-Shirts",
            href: '/error',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
        // More products...
    ]

    }

    export default input
    
