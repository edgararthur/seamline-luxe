import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const Home = () => {
  const featuredProducts = [
    {
      id: '1',
      name: 'Crystal Embellished Socks',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80',
    },
    {
      id: '2',
      name: 'Vintage Lace Collar',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80',
    },
    {
      id: '3',
      name: 'Velvet Evening Cape',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div>
      <Hero />
      
      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Link to="/shop" className="flex items-center text-gray-600 hover:text-gray-900">
            View All <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <div className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white text-xl font-semibold">{product.name}</h3>
                    <p className="text-white">${product.price}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The quality and attention to detail in every piece is remarkable. 
                  Seamline Luxe has become my go-to for unique fashion accessories."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay in Style</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for exclusive offers, style tips, and new product alerts.
          </p>
          <form className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-lg border focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <button className="bg-black text-white px-6 py-2 rounded-r-lg hover:bg-gray-800">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;