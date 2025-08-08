import React, { useState } from "react";
import PriceDisplay from "./PriceDisplay";
import { Link } from "react-router-dom";

export default function ProductCard({ product, onAddToCart }) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    setIsLoading(true);
    if (onAddToCart) {
      await onAddToCart(product);
    }
    setIsLoading(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group border border-gray-200 dark:border-gray-700">
      <Link to={`/catalog/${product._id}`} className="block relative overflow-hidden rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
        {!imageError ? (
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center rounded-lg">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              <p className="text-sm">No Image</p>
            </div>
          </div>
        )}
      </Link>
      <div className="flex-1 flex flex-col">
        <Link to={`/catalog/${product._id}`} className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">
          <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white line-clamp-2">{product.name}</h3>
        </Link>
  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1">{product.description}</p>
        <div className="mt-auto">
          <PriceDisplay 
            price={product.price}
            priceEUR={product.priceEUR}
            originalPrice={product.originalPrice}
            originalPriceEUR={product.originalPriceEUR}
            className="mb-3"
          />
          <button 
            onClick={handleAddToCart}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Добавяне...
              </div>
            ) : (
              'Добави в количка'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
