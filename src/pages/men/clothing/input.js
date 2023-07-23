// TEXT input for "ProductCategory"
const Input = {
    // General Information
    name: {
      category:'Clothing',
    },
  
    // Sort Filter
    sortOptions: [
        { name: 'Most Popular', href: 'https://www.google.com/', current: true },
        { name: 'Best Rating', href: 'https://www.google.com/', current: false },
        { name: 'Newest', href: 'https://www.google.com/', current: false },
        { name: 'Price: Low to High', href: 'https://www.google.com/', current: false },
        { name: 'Price: High to Low', href: 'https://www.google.com/', current: false },
    ],
  
    // Category Filter
    subCategories: [
        { name: 'Tops', href:'/men/clothing/tops'},
        { name: 'Bottoms', href: '/men/clothing/bottoms' },
        { name: 'Innerwear', href: '/men/clothing/innerwear' },
        { name: 'Outerwear', href: '/men/clothing/outerwear' },
        { name: 'Activewear', href: '/men/clothing/activewear' },
    ],
  
    // Specific Category Filters
    filters: [
      {
        id: 'category',
        name: 'Category',
        options: [
          { value: 'new-arrivals', label: 'New Arrivals', checked: false },
          { value: 'sale', label: 'Sale', checked: false },
          { value: 'travel', label: 'Travel', checked: false },
          { value: 'organization', label: 'Organization', checked: false },
          { value: 'accessories', label: 'Accessories', checked: false },
        ],
      },    
      {
        id: 'color',
        name: 'Color',
        options: [
          { value: 'white', label: 'White', checked: false },
          { value: 'beige', label: 'Beige', checked: false },
          { value: 'blue', label: 'Blue', checked: false },
          { value: 'brown', label: 'Brown', checked: false },
          { value: 'green', label: 'Green', checked: false },
          { value: 'purple', label: 'Purple', checked: false },
        ],
      },
      {
        id: 'size',
        name: 'Size',
        options: [
          { value: '2l', label: '2L', checked: false },
          { value: '6l', label: '6L', checked: false },
          { value: '12l', label: '12L', checked: false },
          { value: '18l', label: '18L', checked: false },
          { value: '20l', label: '20L', checked: false },
          { value: '40l', label: '40L', checked: false },
        ],
      },
    ],
  
    // Product Listing
    products: [
      {
        id: 1,
        name: 'Nike Sportswear Premium Essentials',
        category: "Men's T-Shirts",
        href: './tops/nike1',
        price: '$45',
        imageSrc: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8a439643-992e-4729-a170-b018a7e5c319/sportswear-premium-essentials-mens-t-shirt-mkhTvc.png',
        imageAlt: 'image 1',
        imageSrc2: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/38c37f44-c667-4e47-8c96-b228bc9e8f67/sportswear-premium-essentials-mens-t-shirt-mkhTvc.png",
      },
      {
        id: 2,
        name: 'Nike Sportswear Club',
        category: "Men's T-Shirts",
        href: './tops/nike2',
        price: '$30',
        imageSrc: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/hfoqjmvml1z5itd4lzg5/sportswear-club-mens-t-shirt-ShrJfX.png',
        imageAlt: 'image 2',
      },
      {
        id: 3,
        name: 'Nike Sportswear Max90',
        category: "Men's T-Shirts",
        href: './tops/nike3',
        price: '$45',
        imageSrc: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8989c881-7198-4c89-8831-d22601a1076f/sportswear-max90-mens-t-shirt-svKSmj.png',
        imageAlt: 'image 3',
      },
      {
        id: 4,
        name: 'Nike ACG',
        category: "Men's T-Shirts",
        href: './tops/nike4',
        price: '$55',
        imageSrc: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/17c9ba57-557b-4436-a616-4c3966b4babd/acg-mens-t-shirt-rhKHRp.png',
        imageAlt: 'image 4',
      },
      {
        id: 5,
        name: 'Nike Dri-FIT',
        category: "Men's T-Shirts",
        href: './tops/nike5',
        price: '$30',
        imageSrc: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ylfy1desh7d7fzidimas/dri-fit-mens-fitness-t-shirt-nhgSHx.png',
        imageAlt: 'image 5',
      },
      {
        id: 6,
        name: 'Comfort Pocket Pants',
        category: "Men's Pants",
        href: './bottoms/zara1',
        price: '$50',
        imageSrc: 'https://static.zara.net/photos///2023/V/0/2/p/3284/442/251/2/w/1126/3284442251_2_4_1.jpg?ts=1673601386509',
        imageAlt: 'image 1',
      },
      {
          id: 7,
          name: 'Cropped Cargo Pants',
          category: "Men's Pants",
          href: './bottoms/zara2',
          price: '$60',
          imageSrc: 'https://static.zara.net/photos///2023/V/0/2/p/0600/401/821/2/w/1126/0600401821_2_1_1.jpg?ts=1686126729500',
          imageAlt: 'image 2',
      },
      {
        id: 8,
        name: 'Basic Soft Denim Shorts',
        category: "Men's Shorts",
        href: './bottoms/zara3',
        price: '$45',
        imageSrc: 'https://static.zara.net/photos///2023/V/0/2/p/5862/400/250/2/w/1126/5862400250_2_1_1.jpg?ts=1676388969644',
        imageAlt: 'image 3',
      },
      {
        id: 9,
        name: 'Contrast Topstitching Shorts',
        category: "Men's Shorts",
        href: './bottoms/zara4',
        price: '$40',
        imageSrc: 'https://static.zara.net/photos///2023/I/0/2/p/5520/300/505/2/w/1126/5520300505_2_1_1.jpg?ts=1684228604290',
        imageAlt: 'image 4',
      },
      {
        id: 10,
        name: 'Topstitched Ripped Jeans',
        category: "Men's Jeans",
        href: './bottoms/zara5',
        price: '$70',
        imageSrc: 'https://static.zara.net/photos///2023/V/0/1/p/6688/411/400/2/w/1126/6688411400_2_1_1.jpg?ts=1674466071465',
        imageAlt: 'image 5',
      },
      {
        id: 11,
        name: 'Cool Cotton Trunk 4"',
        category: "Men's Underwear",
        href: './innerwear/TommyJohn1',
        price: '$32',
        imageSrc: 'https://tjproduction.imgix.net/products/1000022_020001_Ecomm_Faceout_M_I_CC_4INBB_ICON_928e64f8-61c1-4a04-96f0-bd00f704631d.jpg?v=1680272209&w=1000',
        imageAlt: 'image 1',
      },
      {
        id: 12,
        name: 'Apollo Mid-Length Boxer Brief 6"',
        category: "Men's Underwear",
        href: './innerwear/TommyJohn2',
        price: '$40',
        imageSrc: 'https://tjproduction.imgix.net/products/1002636_400013_Ecomm_Faceout_Crop_M_I_AP_6INBB_ICON_ec638629-0a8c-40a8-8afb-7d1dc071722e.jpg?v=1684262721&w=1000',
        imageAlt: 'image 2',
      },
      {
        id: 13,
        name: 'Second Skin Tank Stay-Tucked Undershirt',
        category: "Men's Undershirts",
        href: './innerwear/TommyJohn3',
        price: '$38',
        imageSrc: 'https://tjproduction.imgix.net/products/1000018_100001_Ecomm_Editorial_Front_M_I_SS_TNK_5.5.22_558.jpg?v=1659302209&w=1000',
        imageAlt: 'image 3',
      },
      {
        id: 14,
        name: 'Second Skin Long Sleeve Sleep Top',
        category: "Men's Sleepwear",
        href: './innerwear/TommyJohn4',
        price: '$62',
        imageSrc: 'https://tjproduction.imgix.net/products/1002982_020074_ECOMM_FRONT_M_S_SS_CRWNCK_10.28.21.jpg?v=1661805604&w=1000',
        imageAlt: 'image 4',
      },
      {
        id: 15,
        name: 'Alta Vista Jacket',
        category: 'Men\'s Jackets',
        href: './outerwear/NorthFace1',
        price: '$98',
        imageSrc: 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A7QAW_JK3_hero?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
        imageAlt: 'image 1',
    },
    {
        id: 16,
        name: 'Denali Anorak',
        category: 'Men\'s Jackets',
        href: './outerwear/NorthFace2',
        price: '$140',
        imageSrc: 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A7UR3_EFS_hero?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
        imageAlt: 'image 2',
    },
    {
        id: 17,
        name: 'Retro Eco Vest',
        category: 'Men\'s Vests',
        href: './outerwear/NorthFace3',
        price: '$90',
        imageSrc: 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A7UR4_LK5_hero?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
        imageAlt: 'image 3',
    },
    {
        id: 18,
        name: 'Corefire Down Jacket',
        category: 'Men\'s Coats',
        href: './outerwear/NorthFace4',
        price: '$320',
        imageSrc: 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A4QWY_6Q9_hero?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
        imageAlt: 'image 4',
    },
    {
        id: 19,
        name: 'McMurdo Bomber',
        category: 'Men\'s Coats',
        href: './outerwear/NorthFace5',
        price: '$350',
        imageSrc: 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A5GD9_JK3_hero?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
        imageAlt: 'image 5',
    },
    {
        id: 20,
        name: 'Geo Seamless T-Shirt',
        category: "Men's Tops",
        href: './activewear/GymShark1',
        price: '$34',
        imageSrc: 'https://cdn.shopify.com/s/files/1/0156/6146/products/GeoSeamlessSsTFloraGreen-WillowGreenA5A2D-EB3R73_2216b052-7756-44c3-8a4f-c5d57736d301_3840x.jpg?v=1674591235',
        imageAlt: 'image 1',
    },
    {
        id: 21,
        name: '315 Long Sleeve T-Shirt',
        category: "Men's Tops",
        href: './activewear/GymShark2',
        price: '$44',
        imageSrc: 'https://cdn.shopify.com/s/files/1/0156/6146/products/315LsSeamlessT-ShirtCoreOlive-MarshGreenA2A9X-EBJD_3840x.jpg?v=1665173568',
        imageAlt: 'image 2',
    },
    {
        id: 22,
        name: 'Vital Seamless Light Tank',
        category: "Men's Tanks",
        href: './activewear/GymShark3',
        price: '$26',
        imageSrc: 'https://cdn.shopify.com/s/files/1/0156/6146/products/VitalTankPapayaOrangeMarlA2A3F-A2A3F-OBGG_ZH_ZH_3840x.jpg?v=1645638287',
        imageAlt: 'image 3',
    },
    {
        id: 23,
        name: 'Arrival Woven Joggers',
        category: "Men's Bottoms",
        href: './activewear/GymShark4',
        price: '$40',
        imageSrc: 'https://cdn.shopify.com/s/files/1/0156/6146/products/ArrivalSlimWovenPantNavy.A2A1N-UBCY.A_ZH_ZH_1200x.jpg?v=1647041889',
        imageAlt: 'image 4',
    },
    {
        id: 24,
        name: 'Sport 1/4 Zip',
        category: "Men's Outwear",
        href: './activewear/`GymShark5',
        price: '$40',
        imageSrc: 'https://cdn.shopify.com/s/files/1/0156/6146/products/Sport1-4ZipWoodlandGreenA3A5T-EBR4-0509.50_9373747c-b932-4369-bbd0-c56a412d0e3a_1200x.jpg?v=1670268987',
        imageAlt: 'image 5',
    },
      // More products...
    ]
  }
  
  export default Input;