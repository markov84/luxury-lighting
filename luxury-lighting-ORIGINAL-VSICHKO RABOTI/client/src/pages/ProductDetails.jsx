import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PriceDisplay from "../components/PriceDisplay";
import { Helmet } from "../components/Helmet";

const API = import.meta.env.VITE_API_URL;

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API}/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError("Грешка при зареждането на продукта");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center min-h-64"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>;
  }
  if (error) {
    return <div className="text-center py-16 text-red-500">{error}</div>;
  }
  if (!product) {
    return <div className="text-center py-16 text-gray-500">Продуктът не е намерен</div>;
  }

  return (
    <>
      <Helmet>
        <title>{product.name} | Luxury Lighting</title>
        <meta name="description" content={product.description} />
      </Helmet>
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mt-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0 w-full md:w-1/2 flex items-center justify-center">
            <img src={product.image} alt={product.name} className="w-full h-80 object-contain rounded-lg bg-gray-100 dark:bg-gray-700" onError={e => e.target.src = "/api/placeholder/300/300"} />
          </div>
          <div className="flex-1 flex flex-col">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{product.name}</h1>
            <div className="mb-4">
              <PriceDisplay price={product.price} priceEUR={product.priceEUR} />
            </div>
            <div className="mb-4 text-gray-700 dark:text-gray-200">
              {product.description}
            </div>
            <div className="mb-2 text-gray-500 dark:text-gray-400 text-sm">
              Категория: {product.category?.name || "-"}
            </div>
            {product.subcategory && (
              <div className="mb-2 text-gray-500 dark:text-gray-400 text-sm">
                Подкатегория: {product.subcategory.name}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
