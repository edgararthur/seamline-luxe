import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Search } from 'lucide-react';
import Footer from '../layout/Footer';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'socks', name: 'Stoned Socks' },
    { id: 'collars', name: 'Detachable Collars' },
    { id: 'capes', name: 'Stylish Capes' },
    { id: 'accessories', name: 'Accessories' },
  ];

  const products = [
    {
      id: '1',
      name: 'Crystal Embellished Socks',
      price: 49.99,
      category: 'socks',
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80',
    },
    {
      id: '2',
      name: 'Vintage Lace Collar',
      price: 29.99,
      category: 'collars',
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80',
    },
    {
      id: '3',
      name: 'Velvet Evening Cape',
      price: 149.99,
      category: 'capes',
      image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80',
    },
    // Add more products...
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filter Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="relative w-full md:w-96 mb-4 md:mb-0">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex space-x-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Filter size={20} className="mr-2" />
              Filter
            </button>
          </div>
        </div>
  
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <div className="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;