import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';

const Cart = () => {
  // Mock cart data (in a real app, this would come from a cart context/state management)
  const cartItems = [
    {
      id: '1',
      name: 'Crystal Embellished Socks',
      price: 49.99,
      quantity: 2,
      size: 'M',
      color: 'Black',
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80',
    },
    // Add more items...
  ];

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 9.99;
  const total = subtotal + shipping;

  const handleDelete = (id) => {
    toast.error(`Deleted product ${id}`)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <ToastContainer />
      <h1 className="text-2xl font-semibold mb-8 text-gray-800">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map(item => (
            <div key={item.id} className="flex border rounded-lg p-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1 ml-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{item.name}</h3>
                  <button className="text-red-400" onClick={handleDelete}>
                    <Trash2 size={20} />
                  </button>
                </div>
                <p className="text-gray-600 text-sm">
                  Size: {item.size} | Color: {item.color}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-2">
                    <button className="p-1 border rounded-lg hover:bg-gray-50">
                      <Minus size={16} />
                    </button>
                    <span>{item.quantity}</span>
                    <button className="p-1 border rounded-lg hover:bg-gray-50">
                      <Plus size={16} />
                    </button>
                  </div>
                  <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="border rounded-lg p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
                Proceed to Checkout
              </button>
              <Link
                to="/shop"
                className="block text-center text-gray-600 hover:text-gray-800"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;