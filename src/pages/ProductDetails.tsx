import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, ShoppingBag, ChevronRight } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Mock product data (in a real app, this would come from an API)
  const product = {
    id,
    name: 'Crystal Embellished Socks',
    price: 49.99,
    description: 'Luxurious cotton socks adorned with hand-placed crystal embellishments. Perfect for adding a touch of glamour to any outfit.',
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80',
    ],
    sizes: ['S', 'M', 'L'],
    colors: ['Black', 'White', 'Navy'],
    reviews: [
      {
        id: '1',
        user: 'Sarah J.',
        rating: 5,
        comment: 'Absolutely beautiful! The crystals catch the light perfectly.',
        date: '2024-02-15',
      },
      // Add more reviews...
    ],
  };

  const handleAddToCart = () => {
    // Implement cart functionality
    console.log('Added to cart:', {
      product,
      quantity,
      size: selectedSize,
      color: selectedColor,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.slice(1).map((image, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`${product.name} view ${index + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl">${product.price}</p>
          <p className="text-gray-600">{product.description}</p>

          {/* Size Selection */}
          <div>
            <h3 className="font-semibold mb-2">Size</h3>
            <div className="flex space-x-4">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg ${
                    selectedSize === size ? 'border-black' : 'border-gray-200'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="font-semibold mb-2">Color</h3>
            <div className="flex space-x-4">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border rounded-lg ${
                    selectedColor === color ? 'border-black' : 'border-gray-200'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="font-semibold mb-2">Quantity</h3>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 border rounded-lg"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 border rounded-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-black text-white py-3 rounded-lg flex items-center justify-center hover:bg-gray-800"
            >
              <ShoppingBag size={20} className="mr-2" />
              Add to Cart
            </button>
            <button className="p-3 border rounded-lg hover:bg-gray-50">
              <Heart size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>
        <div className="space-y-6">
          {product.reviews.map(review => (
            <div key={review.id} className="border-b pb-6">
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < review.rating ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <span className="font-semibold">{review.user}</span>
              </div>
              <p className="text-gray-600">{review.comment}</p>
              <p className="text-sm text-gray-400 mt-2">{review.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;