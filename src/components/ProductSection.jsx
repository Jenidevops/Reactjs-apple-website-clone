import React from 'react';

import iphone17 from '../iphone17.png';
import macbookAir from '../macbook-air.png';
import ipadAir from '../ipad-air.png';
import appleWatchUltra from '../applewatchultra.png';
import airpods3 from '../airpods3.png';
import appleFitness from '../apple-fitness.jpg';
import appleOne from '../apple-one.png';
import appleTv from '../apple-tv-logo.png';
import appleCard from '../apple-card-logo.png';
import dickinsonAppleTv from '../dickinson-apple-tv.png';
import pro17img from '../pro17img.png';
import appleWatch from '../applewatch.png';

const ProductSection = () => {
  const products = [
{ id: 'iphone', name: 'iPhone 17', tagline: 'A total powerhouse.', img: iphone17, button: 'Buy' },
{ id: 'mac', name: 'MacBook Air', tagline: 'Designed to be loved.', img: macbookAir, button: 'Buy' },
{ id: 'ipad', name: 'iPad Air', tagline: 'Light. Bright. Full of might.', img: ipadAir, button: 'Buy' },
{ id: 'watch', name: 'Apple Watch Ultra', tagline: 'Adventure awaits.', img: appleWatchUltra, button: 'Buy' },
{ id: 'airpods', name: 'AirPods 3', tagline: 'Wireless freedom.', img: airpods3, button: 'Buy' },
{ id: 'appleFitness', name: 'Apple Fitness+', tagline: 'Get fit with Apple.', img: appleFitness, button: 'Subscribe' },
{ id: 'appleOne', name: 'Apple One', tagline: 'All your Apple services.', img: appleOne, button: 'Subscribe' },
{ id: 'appleTv', name: 'Apple TV+', tagline: 'Stream original shows.', img: appleTv, button: 'Watch' },
{ id: 'appleCard', name: 'Apple Card', tagline: 'Get the Apple Card.', img: appleCard, button: 'Apply' },
{ id: 'dickinsonAppleTv', name: 'Dickinson on Apple TV', tagline: 'Watch now.', img: dickinsonAppleTv, button: 'Watch' },
{ id: 'pro17img', name: 'Pro 17', tagline: 'Performance redefined.', img: pro17img, button: 'Buy' },
{ id: 'appleWatch', name: 'Apple Watch', tagline: 'Adventure awaits.', img: appleWatch, button: 'Buy' },
  ];

  return (
    <section className="py-16 bg-gray-50" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <>
            {products.map((product) => (
              <div key={product.id} id={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition duration-300">
                <img src={product.img} alt={product.name} className="w-full h-48 object-contain" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.tagline}</p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition duration-300">{product.button}</button>
                </div>
              </div>
            ))}
          </>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
