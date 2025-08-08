import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export default function CategoryDropdown() {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const closeTimeout = useRef();

  useEffect(() => {
    fetchCategories();
    // Cleanup on unmount
    return () => clearCloseTimeout();
    // eslint-disable-next-line
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API}/products/categories/all`);
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchSubcategories = async (categoryId) => {
    try {
      const response = await axios.get(`${API}/products/subcategories/${categoryId}`);
      setSubcategories(response.data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
      setSubcategories([]);
    }
  };

  const handleCategoryHover = (category) => {
    setActiveCategory(category);
    if (category) {
      fetchSubcategories(category._id);
    }
  };

  // Helper to clear close timeout
  const clearCloseTimeout = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  };

  // Open dropdown immediately
  const handleMouseEnter = () => {
    clearCloseTimeout();
    setIsOpen(true);
  };

  // Close dropdown with delay
  const handleMouseLeave = () => {
    clearCloseTimeout();
    closeTimeout.current = setTimeout(() => {
      setIsOpen(false);
      setActiveCategory(null);
      setSubcategories([]);
    }, 200); // 200ms delay
  };

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Categories Trigger */}
      <button className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200">
        <span>Категории</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-50 min-w-[600px]">
          <div className="flex">
            {/* Categories Column */}
            <div className="w-1/2 border-r border-gray-200 dark:border-gray-700">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white">Категории</h3>
              </div>
              <div className="py-2">
                <Link
                  to="/catalog"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  Всички продукти
                </Link>
                {categories.map((category) => (
                  <div
                    key={category._id}
                    onMouseEnter={() => handleCategoryHover(category)}
                    className={`px-4 py-2 cursor-pointer transition-colors ${
                      activeCategory?._id === category._id
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Link
                      to={`/catalog?category=${category._id}`}
                      className="flex items-center justify-between"
                    >
                      <span>{category.name}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Subcategories Column */}
            <div className="w-1/2">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {activeCategory ? activeCategory.name : 'Подкатегории'}
                </h3>
              </div>
              <div className="py-2">
                {activeCategory && (
                  <Link
                    to={`/catalog?category=${activeCategory._id}`}
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    Всички от {activeCategory.name}
                  </Link>
                )}
                {subcategories.map((subcategory) => (
                  <Link
                    key={subcategory._id}
                    to={`/catalog?category=${activeCategory._id}&subcategory=${subcategory._id}`}
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    {subcategory.name}
                  </Link>
                ))}
                {activeCategory && subcategories.length === 0 && (
                  <div className="px-4 py-2 text-gray-500 dark:text-gray-400 italic">
                    Няма подкатегории
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
