'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-blue-700 text-white py-5 px-8 shadow-md">
        <h1 className="text-3xl font-bold">🛒 MyShop</h1>
        <p className="text-sm text-blue-200 mt-1">Your one-stop ecommerce store</p>
      </header>

      {/* Products */}
      <section className="p-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Featured Products</h2>

        {loading ? (
          <p className="text-center text-gray-500 text-lg">Loading products...</p>
        ) : products.length === 0 ? (
          <p className="text-center text-red-500">No products found in database.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <div key={product._id} className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
                <img
                  src={product.image || 'https://via.placeholder.com/200'}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <span className="text-xs text-blue-600 font-medium uppercase">{product.category}</span>
                <h3 className="text-lg font-bold text-gray-800 mt-1">{product.name}</h3>
                <p className="text-gray-500 text-sm mt-1 flex-grow">{product.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-blue-700 font-bold text-lg">Rs. {product.price}</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 text-center py-4 mt-10">
        <p>© 2025 MyShop — Built with Next.js, Node.js & MongoDB</p>
      </footer>

    </main>
  );
}