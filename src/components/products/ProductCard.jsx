import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Customers also purchased
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-64 w-full object-contain bg-gray-50 p-4"
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 truncate">{product.title}</h3>
                <p className="text-sm text-gray-500 mt-1 capitalize">{product.category}</p>

                <div className="flex items-center justify-between mt-3">
                  <p className="text-md font-bold text-blue-700">${product.price}</p>
                  <div className="flex items-center gap-1 text-sm text-yellow-600">
                    ⭐ {product.rating?.rate} <span className="text-gray-500">({product.rating?.count})</span>
                  </div>
                </div>

                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
