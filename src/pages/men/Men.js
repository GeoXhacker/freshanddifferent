import React from 'react';
import { NavBar, Footer } from '../../components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const callouts = [
    {
      name: 'Clothing',
      description: 'Outfits Made for Everday Essentials',
      imageSrc: 'https://cdn.shopify.com/s/files/1/1610/4725/products/jamhdfront.jpg?v=1676282978&width=1540',
      imageAlt: 'suspiciousAntwerp_1',
      urlTag: '/men/clothing/',
    },
    {
      name: 'Accessories',
      description: 'Let Us Complete Your Look',
      imageSrc: 'https://cdn.shopify.com/s/files/1/1610/4725/products/sockssizes.jpg?v=1660808760&width=1540',
      imageAlt: 'suspiciousAntwerp_2',
      urlTag: '/men/accessories/',
    },
    {
      name: 'Brands',
      description: 'Powerful Collaborations with Industry Pioneers',
      imageSrc: 'https://cdn.shopify.com/s/files/1/1610/4725/products/23-JJ-1-VT-HD-OL-M.png?v=1681380429&width=1540',
      imageAlt: 'suspiciousAntwerp_3',
      urlTag: '/men/brands/',
    },
  ]

  const products =  [
    { name: "Tops", href: "/men/clothing/tops/",  imageSrc: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/hfoqjmvml1z5itd4lzg5/sportswear-club-mens-t-shirt-ShrJfX.png',
    imageAlt: 'image 2' },
    { name: "Bottoms", href: "/men/clothing/bottoms/",  imageSrc: 'https://static.zara.net/photos///2023/V/0/2/p/3284/442/251/2/w/1126/3284442251_2_4_1.jpg?ts=1673601386509',
    imageAlt: 'image 1', },
    { name: "Innerwear", href: "/men/clothing/innerwear/",imageSrc: 'https://tjproduction.imgix.net/products/1000018_100001_Ecomm_Editorial_Front_M_I_SS_TNK_5.5.22_558.jpg?v=1659302209&w=1000',
    imageAlt: 'image 3',},
    { name: "Outerwear", href: "/men/clothing/outerwear/", imageSrc: 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A5GD9_JK3_hero?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
    imageAlt: 'image 5', },
    { name: "Activewear", href: "/men/clothing/activewear/", imageSrc: 'https://cdn.shopify.com/s/files/1/0156/6146/products/Sport1-4ZipWoodlandGreenA3A5T-EBR4-0509.50_9373747c-b932-4369-bbd0-c56a412d0e3a_1200x.jpg?v=1670268987',
    imageAlt: 'image 5', }
  ]

const MenClothing = () => {
  // stagger motion animation
  const containerMotion = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  // animation parameters for TEXT
  const headerMotion = {
    // movement = FADE-IN + UPWARDS movement
    hidden: { opacity: 0, y: 50 }, // INITIAL STAGE
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' }}, // ANIMATION STAGE
  };

  // animation parameters for TEXT
  const textMotion = {
    // movement = FADE-IN + UPWARDS movement
    hidden: { opacity: 0, y: -50 }, // INITIAL STAGE
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' }}, // ANIMATION STAGE
  };

  // animation parameters for IMAGE
  const imageMotion = {
    // movement = FADE-IN + SLIDE DOWN
    hidden: { opacity: 0 }, // INITIAL STAGE
    visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } }, // ANIMATION STAGE
  };

  return (
    <div className="bg-white">
      {/* NAVIGATION BAR */}
       

      {/* HEADER SECION */}
      <div className="bg-cover bg-center bg-no-repeat bg-[url('https://img.freepik.com/free-photo/handsome-man-posing_144627-43637.jpg?w=1380&t=st=1686257680~exp=1686258280~hmac=726afead24dfc4f4278dba721ae69035073c374f588b3d9c614e3c197bbb5bfe')]">
        <div className="pb-44 pt-44 sm:pb-40 sm:pt-30 lg:pb-52 lg:pt-54">
            {/* HEADING TEXT */}
            <motion.div className="mx-auto sm:max-w-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                variants={containerMotion}
                >
                <motion.h1 className="flex justify-center text-center text-5xl lg:text-6xl font-semibold tracking-tight text-gray-700 mt-60 sm:mt-56 lg:mt-21" variants={headerMotion}>
                    Craft Your
                </motion.h1>
                <motion.h1 className="flex justify-center text-center text-5xl lg:text-6xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-purple-500" variants={headerMotion}>
                    Signature Look
                </motion.h1>
                <motion.h1 className="flex justify-center text-center text-2xl lg:text-3xl font-semibold tracking-tight text-gray-700 mt-4" variants={headerMotion}>
                    Style Your Game with Confidence.
                </motion.h1>
            </motion.div>
        </div>
      </div>

      {/* Collections - Grid View */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-10"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.2}}
            variants={containerMotion}
            >
          {/* SECTION TEXT */}
          <div className='flex'>
            <motion.h2 className="text-2xl font-bold text-gray-900 mr-1.5" variants={textMotion}>
              Discover
            </motion.h2>
            <motion.h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-purple-500 mr-1.5" variants={textMotion}>
              Our Collections
            </motion.h2>
          </div>

          {/* REUSABLE TEMPlATE FORMAT */}
          <div className="mt-6 space-y-12 lg:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {products.map((product) => (
              <div key={product.name} className="group relative">
                
                {/* Collection Image */}
                <motion.div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 shadow-xl transition-transform duration-300 transform group-hover:scale-95 sm:h-64" variants={imageMotion}>
                  <Link to={product.href}>
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-80"
                    />
                  </Link>
                </motion.div>

                {/* TEXT SECTION */}
                <motion.span variants={textMotion}>
                  {/* Collection Title */}
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-purple-500 mr-1.5">
                    <a href={product.href}>
                      {product.name} 
                    </a>
                  </h3>

                  {/* Collection Description */}
                  {/* <p className="text-base font-semibold text-gray-900">
                    {product.name}
                  </p> */}
                </motion.span>

              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </div>
  )
}

export default MenClothing