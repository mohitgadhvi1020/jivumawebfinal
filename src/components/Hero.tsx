import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { products } from '../data/products';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-full h-full relative"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-5xl font-bold mb-4">
                  Savor Rich, Authentic Flavors
                </h1>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                  {product.description}
                </p>
                <button className="bg-orange-500 text-white px-8 py-3 rounded-lg flex items-center gap-2 mx-auto hover:bg-orange-600 transition-colors">
                  Shop Now
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {products.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-orange-500' : 'bg-white'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full">
        10% OFF on Your First Order
      </div>
    </div>
  );
}