'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('Featured');
  const [loading, setLoading] = useState(true);

  // Fetch items from our Express API backend
  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  const filteredProducts = Array.isArray(products) 
  ? products.filter(p => p.tag === activeTab) 
  : [];
  
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbfa] font-sans">
      
      {/* HEADER SECTION */}
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-3xl font-serif font-bold tracking-tight text-amber-900">
            Rustik Plank<span className="text-amber-600">.</span>
          </div>
          <nav className="flex flex-wrap justify-center space-x-6 text-sm uppercase font-semibold text-gray-600">
            <a href="#" className="hover:text-amber-700 transition">Home</a>
            <a href="#" className="hover:text-amber-700 transition">About Us</a>
            <a href="#" className="hover:text-amber-700 transition">Contact Co</a>
            <a href="#" className="hover:text-amber-700 transition">Blogs</a>
            <a href="#" className="hover:text-amber-700 transition">Cabinets</a>
            <a href="#" className="hover:text-amber-700 transition">Tables</a>
          </nav>
          <div className="flex items-center space-x-4">
            <input 
              type="text" 
              placeholder="Search store..." 
              className="border px-3 py-1.5 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-amber-600"
            />
            <div className="text-sm font-medium text-gray-700 bg-amber-100 px-3 py-1.5 rounded-md">
              Cart (0)
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-stone-100 to-amber-50 py-16 px-4 border-b">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            <span className="text-amber-700 font-bold uppercase tracking-widest text-xs">Premium Collection</span>
            <h1 className="text-4xl md:text-6xl font-serif font-black text-stone-800 my-3 leading-tight">
              Handcrafted Timber <br/>Artistry Design
            </h1>
            <p className="text-gray-600 text-sm max-w-md mb-6 leading-relaxed">
              Experience our dynamic e-commerce catalog built cleanly with raw premium materials. Beautifully structured for elegance and durability.
            </p>
            <div className="flex items-baseline space-x-4 mb-6">
              <span className="text-3xl font-bold text-amber-900">£129.99</span>
              <span className="text-sm line-through text-gray-400">£199.99</span>
            </div>
            <button className="bg-amber-800 text-white px-6 py-3 font-semibold text-sm rounded shadow hover:bg-amber-900 transition uppercase tracking-wider">
              Add To Cart
            </button>
          </div>
          <div className="flex justify-center">
            <div className="w-72 h-72 bg-amber-200 rounded-full flex items-center justify-center relative overflow-hidden shadow-inner">
              <div className="absolute w-64 h-24 border-4 border-amber-900 rounded-full rotate-45 transform"></div>
              <div className="absolute w-64 h-24 border-4 border-amber-700 rounded-full -rotate-45 transform"></div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 py-12 flex-grow w-full">
        
        {/* QUICK CATEGORY BLOCKS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {['CHAIRS COLLECTION', 'BEDS COLLECTION', 'TABLES COLLECTION'].map((title, i) => (
            <div key={i} className="border p-6 bg-white rounded shadow-sm text-center group hover:border-amber-600 transition cursor-pointer">
              <div className="h-28 bg-stone-100 rounded mb-4 flex items-center justify-center text-stone-400 font-mono text-xs group-hover:bg-amber-50 transition">
                [{title.split(' ')[0]} ASSET]
              </div>
              <h3 className="font-serif font-bold tracking-wide text-stone-800">{title}</h3>
            </div>
          ))}
        </section>

        {/* TAB SWITCHER & FILTERED PRODUCTS ROW */}
        <section className="mb-16">
          <div className="flex justify-center border-b mb-8 space-x-2 bg-stone-100 p-1 rounded-md max-w-md mx-auto">
            {['Featured', 'Special', 'Popular'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 text-sm font-medium rounded transition uppercase tracking-wider ${
                  activeTab === tab ? 'bg-white text-amber-900 shadow-sm' : 'text-gray-500 hover:text-stone-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center text-gray-500 py-12 font-medium">Loading items from MongoDB database...</div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center text-gray-400 py-12">No products found for this section.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product._id} className="border bg-white rounded-lg p-4 shadow-sm flex flex-col justify-between hover:shadow-md transition">
                  <div>
                    <div className="aspect-square bg-stone-50 rounded mb-4 relative overflow-hidden flex items-center justify-center border">
                      {product.discount > 0 && (
                        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded z-10">
                          {product.discount}% OFF
                        </span>
                      )}
                      <img src={product.image} alt={product.name} className="object-cover h-full w-full hover:scale-105 transition duration-300" />
                    </div>
                    <h4 className="font-bold text-stone-800 text-base mb-1">{product.name}</h4>
                    <p className="text-xs text-gray-500 mb-2 line-clamp-2">{product.description}</p>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-amber-900 mb-3">£{product.price.toFixed(2)}</div>
                    <button className="w-full bg-stone-800 text-white text-xs font-semibold py-2 rounded uppercase hover:bg-amber-800 transition tracking-wider">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* PROMOTIONAL HOT DEALS BANNERS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-amber-800 to-amber-950 text-white p-8 rounded-lg flex flex-col justify-between shadow-sm">
            <div>
              <span className="bg-amber-600 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">Hot Deal</span>
              <h3 className="text-2xl font-serif font-bold mt-4 mb-2">Reclaimed and Hand Crafted Furniture</h3>
              <p className="text-amber-100 text-xs max-w-sm">Authentic wood textures curated cleanly for an industrial layout finish.</p>
            </div>
            <div className="text-4xl font-black text-amber-400 mt-6">50% OFF</div>
          </div>

          <div className="bg-gradient-to-br from-stone-800 to-stone-950 text-white p-8 rounded-lg flex flex-col justify-between shadow-sm">
            <div>
              <span className="bg-stone-600 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">Elite Collection</span>
              <h3 className="text-2xl font-serif font-bold mt-4 mb-2">Premium Premium Design Layout</h3>
              <p className="text-stone-300 text-xs max-w-sm">Clean minimalist structural frames optimized for home living spaces.</p>
            </div>
            <div className="text-4xl font-black text-amber-500 mt-6">35% OFF</div>
          </div>
        </section>
      </main>

      {/* FOOTER SECTION */}
      <footer className="bg-stone-900 text-stone-400 text-xs py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h5 className="text-white font-bold uppercase tracking-wider mb-3 text-sm">Informations</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold uppercase tracking-wider mb-3 text-sm">My Account</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Your Account</a></li>
              <li><a href="#" className="hover:text-white transition">Information</a></li>
              <li><a href="#" className="hover:text-white transition">Addresses</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold uppercase tracking-wider mb-3 text-sm">Help and More</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">New Products</a></li>
              <li><a href="#" className="hover:text-white transition">Top Sellers</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold uppercase tracking-wider mb-3 text-sm">Links</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Delivery</a></li>
              <li><a href="#" className="hover:text-white transition">Gift Cards</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 border-t border-stone-800 pt-6 text-center text-stone-500">
          © 2026 Rustik Plank Furniture. All Rights Reserved. Dynamic Full-Stack Programming Lab Assignment.
        </div>
      </footer>

    </div>
  );
}